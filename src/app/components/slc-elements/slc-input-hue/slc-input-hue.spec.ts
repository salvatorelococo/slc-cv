import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcInputHue } from './slc-input-hue';

describe('SlcInputHue', () => {
	let component: SlcInputHue;
	let fixture: ComponentFixture<SlcInputHue>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcInputHue],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcInputHue);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
