import {Component, Input, OnInit} from '@angular/core';
import {StepsService} from '../services/steps.service';
import {VersionedContent} from '../interfaces/versioned-content';
import {Observable} from 'rxjs';
import {Step} from '../interfaces/step';

@Component({
  selector: 'endless-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {

  @Input() title: string;
  steps: Observable<Step[]> = this.stepsService.getData();

  constructor(private stepsService: StepsService) {
  }


  ngOnInit(): void {
    this.setCurrentContentVersions();
  }

  private setCurrentContentVersions() {
    // this.steps.forEach(async (step) => { step.updateCurrentContentIndex() });
  }
}
