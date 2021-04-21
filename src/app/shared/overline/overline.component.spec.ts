import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OverlineComponent } from './overline.component';

describe('OverlineComponent', () => {
  let component: OverlineComponent;
  let fixture: ComponentFixture<OverlineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
