import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcItemB } from './slc-item-b';

describe('SlcItemB', () => {
	let component: SlcItemB;
	let fixture: ComponentFixture<SlcItemB>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcItemB],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcItemB);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
