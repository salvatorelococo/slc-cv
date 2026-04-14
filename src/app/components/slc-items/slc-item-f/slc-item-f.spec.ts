import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemF } from './slc-item-f';

describe('SlcItemF', () => {
  let component: SlcItemF;
  let fixture: ComponentFixture<SlcItemF>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlcItemF]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlcItemF);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
