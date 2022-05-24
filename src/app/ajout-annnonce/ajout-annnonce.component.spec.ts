import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAnnnonceComponent } from './ajout-annnonce.component';

describe('AjoutAnnnonceComponent', () => {
  let component: AjoutAnnnonceComponent;
  let fixture: ComponentFixture<AjoutAnnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAnnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutAnnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
