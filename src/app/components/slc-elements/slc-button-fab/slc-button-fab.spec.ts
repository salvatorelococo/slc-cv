import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcButtonFab } from './slc-button-fab';

describe('SlcButtonFab', () => {
	let component: SlcButtonFab;
	let fixture: ComponentFixture<SlcButtonFab>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcButtonFab],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcButtonFab);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
