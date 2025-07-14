import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTemperature } from './current-temperature';

describe('CurrentTemperature', () => {
  let component: CurrentTemperature;
  let fixture: ComponentFixture<CurrentTemperature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentTemperature]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentTemperature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
