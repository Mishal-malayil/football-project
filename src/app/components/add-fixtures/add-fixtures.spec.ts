import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFixtures } from './add-fixtures';

describe('AddFixtures', () => {
  let component: AddFixtures;
  let fixture: ComponentFixture<AddFixtures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddFixtures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFixtures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
