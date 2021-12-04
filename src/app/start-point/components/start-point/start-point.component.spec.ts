/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartPointComponent } from './start-point.component';

describe('StartPointComponent', () => {
  let component: StartPointComponent;
  let fixture: ComponentFixture<StartPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
