import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotGoundComponent } from './page-not-gound.component';

describe('PageNotGoundComponent', () => {
  let component: PageNotGoundComponent;
  let fixture: ComponentFixture<PageNotGoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotGoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotGoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
