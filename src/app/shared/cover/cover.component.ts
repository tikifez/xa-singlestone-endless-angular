import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'endless-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() overline: string | null;
  @Input() title: string | null;
  @Input() isLazyLoad: true;
  @Input() href: string;
  @Input() imgSrc: string;
  @Input() imgSrcSet: string;
  @Input() imgSizes: string;
  @Input() imgAlt: string;
  @Input() buttonLabel: string;
  @Input() bokeh = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
