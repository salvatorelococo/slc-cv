import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlcLinkOrText } from './slc-link-or-text';

describe('SlcLinkOrText', () => {
	let component: SlcLinkOrText;
	let fixture: ComponentFixture<SlcLinkOrText>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SlcLinkOrText],
		}).compileComponents();

		fixture = TestBed.createComponent(SlcLinkOrText);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
