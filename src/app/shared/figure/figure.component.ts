import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'endless-figure',
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss']
})
export class FigureComponent implements OnInit {

  @Input() src: string;
  @Input() srcSet: string;
  @Input() alt: string;
  @Input() sizes: string;
  @Input() isLazyLoad: boolean;
  @Input() width: number;
  @Input() height: number;
  @Input() cover = false;
  @Input() bokeh = false;

  constructor() { }

  ngOnInit(): void {
  }

}
