import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemA } from './slc-item-a';

describe('SlcItemA', () => {
	let component: SlcItemA;
	let fixture: ComponentFixture<SlcItemA>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcItemA],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcItemA);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
