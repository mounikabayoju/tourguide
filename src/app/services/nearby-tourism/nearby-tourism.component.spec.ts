import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyTourismComponent } from './nearby-tourism.component';

describe('NearbyTourismComponent', () => {
  let component: NearbyTourismComponent;
  let fixture: ComponentFixture<NearbyTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyTourismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
