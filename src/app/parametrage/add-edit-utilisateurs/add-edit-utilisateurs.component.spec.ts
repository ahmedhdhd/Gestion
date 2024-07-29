import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditUtilisateursComponent } from './add-edit-utilisateurs.component';

describe('AddEditUtilisateursComponent', () => {
  let component: AddEditUtilisateursComponent;
  let fixture: ComponentFixture<AddEditUtilisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditUtilisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
