import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import {By} from 'protractor';
import {Component} from '@angular/core';

@Component({
  template: `<endless-button>Get Started</endless-button>`,
})
export class ButtonContentProjectionTesterComponent {
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let projectedComponent: ButtonContentProjectionTesterComponent;
  let projectedFixture: ComponentFixture<ButtonContentProjectionTesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonComponent,
        ButtonContentProjectionTesterComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    projectedFixture = TestBed.createComponent(ButtonContentProjectionTesterComponent);
    projectedComponent = projectedFixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

