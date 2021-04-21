import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, HostBinding,
  OnInit
} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';

class NavigationEvent {
}

@Component({
  selector: 'endless-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, AfterViewInit {

  @HostBinding('class.isLoading') isLoading = true;
  @HostBinding('class.isLoaded') isLoaded = false;
  isLoaderNeeded = true;
  events: NavigationEvent;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router: Router) {
    this.events = this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationStart) {
            // TODO: This could use more nuanced by checking if the loader
            //  is needed
            if (event.url !== '/') {
              this.isLoaderNeeded = false;
              this.changeDetectorRef.detectChanges();
            }
          }
        });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

    console.log(this.router.url, this.isLoaderNeeded);
    setTimeout(() => {
      if (this.isLoaderNeeded) {
        setTimeout(() => {
          this.isLoaded = true;
          this.changeDetectorRef.detectChanges();

          setTimeout(() => {
            this.isLoading = false;
            this.changeDetectorRef.detectChanges();
          }, 1000);
        }, 2000);
      } else {
        this.isLoaded = true;
        this.isLoading = false;
        this.changeDetectorRef.detectChanges();
      }
    }, 50);

  }

}
