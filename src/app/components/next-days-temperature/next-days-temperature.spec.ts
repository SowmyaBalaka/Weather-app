import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextDaysTemperature } from './next-days-temperature';

describe('NextDaysTemperature', () => {
  let component: NextDaysTemperature;
  let fixture: ComponentFixture<NextDaysTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextDaysTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextDaysTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
