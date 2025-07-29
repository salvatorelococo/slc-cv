import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcCv } from './slc-cv';

describe('SlcCv', () => {
	let component: SlcCv;
	let fixture: ComponentFixture<SlcCv>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcCv],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcCv);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
