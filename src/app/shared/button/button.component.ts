import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'endless-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() href: string;

  constructor() { }

  ngOnInit(): void {
  }

}
