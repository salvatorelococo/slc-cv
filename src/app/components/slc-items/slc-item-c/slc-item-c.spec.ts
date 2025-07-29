import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemC } from './slc-item-c';

describe('SlcItemC', () => {
	let component: SlcItemC;
	let fixture: ComponentFixture<SlcItemC>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcItemC],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcItemC);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
