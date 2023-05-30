import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDataDisplayerComponent } from './person-data-displayer.component';

describe('PersonDataDisplayerComponent', () => {
  let component: PersonDataDisplayerComponent;
  let fixture: ComponentFixture<PersonDataDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDataDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDataDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
