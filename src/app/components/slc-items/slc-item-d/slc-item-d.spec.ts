import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemD } from './slc-item-d';

describe('SlcItemD', () => {
	let component: SlcItemD;
	let fixture: ComponentFixture<SlcItemD>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcItemD],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcItemD);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
