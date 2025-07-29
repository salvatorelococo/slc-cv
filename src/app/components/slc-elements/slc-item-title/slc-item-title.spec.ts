import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemTitle } from './slc-item-title';

describe('SlcItemTitle', () => {
	let component: SlcItemTitle;
	let fixture: ComponentFixture<SlcItemTitle>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcItemTitle],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcItemTitle);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
