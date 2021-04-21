import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepsComponent } from './steps.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {StepsService} from '../services/steps.service';

describe('StepsComponent', () => {
  let component: StepsComponent;
  let fixture: ComponentFixture<StepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StepsService],
      declarations: [ StepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
