import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeam } from './add-team';

describe('AddTeam', () => {
  let component: AddTeam;
  let fixture: ComponentFixture<AddTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
