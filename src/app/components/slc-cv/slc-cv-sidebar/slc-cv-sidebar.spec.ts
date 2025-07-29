import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcCvSidebar } from './slc-cv-sidebar';

describe('SlcCvSidebar', () => {
	let component: SlcCvSidebar;
	let fixture: ComponentFixture<SlcCvSidebar>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcCvSidebar],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcCvSidebar);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
