import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcChip } from './slc-chip';

describe('SlcChip', () => {
	let component: SlcChip;
	let fixture: ComponentFixture<SlcChip>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcChip],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcChip);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
