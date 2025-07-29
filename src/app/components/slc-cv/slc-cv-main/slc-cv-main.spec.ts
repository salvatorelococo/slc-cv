import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcCvMain } from './slc-cv-main';

describe('SlcCvMain', () => {
	let component: SlcCvMain;
	let fixture: ComponentFixture<SlcCvMain>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcCvMain],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcCvMain);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
