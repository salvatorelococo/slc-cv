import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcChipList } from './slc-chip-list';

describe('SlcChipList', () => {
	let component: SlcChipList;
	let fixture: ComponentFixture<SlcChipList>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcChipList],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcChipList);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
