import {
	AfterViewInit,
	Component,
	ElementRef,
	inject,
	Renderer2,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	CurriculumVitae,
	LocalizedData,
} from '../.././models/curriculum.model';
import { TranslatePipe } from '../.././pipes/translate.pipe';
import { SafeDatePipe } from '../.././pipes/safe-date.pipe';
import { getCv, privacyStatement } from '../.././constants/curriculum.constant';
import { SlcCvSidebar } from './slc-cv-sidebar/slc-cv-sidebar';
import { SlcCvMain } from './slc-cv-main/slc-cv-main';

@Component({
	selector: 'slc-cv',
	templateUrl: './slc-cv.html',
	styleUrl: './slc-cv.scss',
	imports: [CommonModule, TranslatePipe, SlcCvSidebar, SlcCvMain],
})
export class SlcCv implements AfterViewInit {
	protected cv: CurriculumVitae;
	protected readonly privacyStatement: LocalizedData<string> = privacyStatement;

	private readonly _host = inject(ElementRef);
	private readonly _renderer = inject(Renderer2);

	private readonly _safeDatePipe: SafeDatePipe = new SafeDatePipe();

	constructor() {
		this.cv = getCv(this._safeDatePipe);
	}

	ngAfterViewInit(): void {
		this._updateSheets();
	}

	private _updateSheets(element?: HTMLDivElement): void {
		const content =
			element ||
			(document.querySelector(
				'.sheet .content.main-content',
			) as HTMLDivElement);

		let { offsetHeight, scrollHeight } = content;

		const footer = document.querySelector('.sheet .footer') as HTMLDivElement;
		let newPageContent: Node[] = [];

		const getFooterHeight = () =>
			newPageContent?.length
				? footer.offsetHeight + 16 /* 16px of margin-top */
				: 0;

		while (scrollHeight - getFooterHeight() > offsetHeight) {
			const removedChild = content.removeChild(<Node>content.lastChild);

			// Ignore empty elements
			if (removedChild.hasChildNodes()) {
				newPageContent.unshift(removedChild);
			}

			scrollHeight = content.scrollHeight;
		}

		// First iteration
		// First element supposed to go on the new page
		const firstNewPageItem: Node | undefined = newPageContent.shift();

		// Clone without the subtree (shell) of the element
		const newFirstItem: Node | undefined = firstNewPageItem?.cloneNode();

		// Empty array to fill with future clone nodes
		const cloneContent = [];

		if (firstNewPageItem) {
			// Take element back to the main page
			content.appendChild(firstNewPageItem);

			// Get scroll height
			scrollHeight = content.scrollHeight;

			// Check if content is overflowing
			while (scrollHeight - getFooterHeight() > offsetHeight) {
				// Last child of first element supposed to go on the new page
				const removedChild = firstNewPageItem.removeChild(
					<Node>firstNewPageItem.lastChild,
				);

				// Ignore empty elements
				if (removedChild?.hasChildNodes()) {
					// Add element to temp array
					cloneContent.unshift(removedChild);
				}

				// Update scroll height value
				scrollHeight = content.scrollHeight;
			}

			// Remove the element if empty
			if (!firstNewPageItem.hasChildNodes()) {
				content.removeChild(firstNewPageItem);
			}
		}

		// Second iteration
		// First sub-element supposed to go on the new page
		const firstNewPageSubItem = cloneContent.shift();

		// Clone without the subtree (shell) of the sub-element
		const newFirstSubItem = firstNewPageSubItem?.cloneNode();

		// Empty array to fill with future clone nodes
		const subcloneContent: Node[] = [];

		// Top position value of the last moved element before it was moved
		let lastElementTopValue: number = -1;

		// Top position value of the next to move element
		let newElementTopValue: number = 0;

		if (firstNewPageSubItem) {
			firstNewPageItem?.appendChild(firstNewPageSubItem);
			let lastChild;

			scrollHeight = content.scrollHeight; // Get scroll height

			// Check if content is overflowing or if the next element is at the same top position of the last one to avoid splitting rows in the middle
			while (
				scrollHeight - getFooterHeight() > offsetHeight ||
				newElementTopValue === lastElementTopValue
			) {
				// Last child of first element supposed to go on the new page
				lastChild = firstNewPageSubItem.lastChild as HTMLElement;

				// Top position value of the current element
				lastElementTopValue = (
					lastChild as HTMLElement
				)?.getBoundingClientRect?.().top;

				// Try to remove the child and add it to the subcloneContent array if it has childs
				try {
					const removedChild = firstNewPageSubItem.removeChild(<Node>lastChild);

					if (removedChild?.hasChildNodes()) {
						subcloneContent.unshift(removedChild);
					}
				} catch {
					break;
				}

				// Update scroll height value
				scrollHeight = content.scrollHeight;
				const newLastChild = firstNewPageSubItem?.lastChild as HTMLElement;

				newElementTopValue = (
					newLastChild as HTMLElement
				)?.getBoundingClientRect?.().top;
			}

			// Remove the element if empty
			if (!firstNewPageSubItem.hasChildNodes()) {
				firstNewPageItem?.removeChild(firstNewPageSubItem);
			}

			// Fill the sub-element clone with the nodes inside the array
			for (const el of subcloneContent) {
				if (el.hasChildNodes()) {
					newFirstSubItem?.appendChild(el);
				}
			}

			// Check if the last element of the main page is a title; if so move it to the new one.
			const lastSecondLevelChild = content.lastChild?.lastChild as HTMLElement;
			if (lastSecondLevelChild.classList?.contains('section-title')) {
				const parent = lastSecondLevelChild.parentNode;
				parent?.removeChild(lastSecondLevelChild);

				if (!parent?.hasChildNodes()) {
					content.removeChild(parent as Node);
				}

				newFirstItem?.appendChild(lastSecondLevelChild);
			}

			// Add the sub-element clone to the new page array if it has childs
			if (newFirstSubItem?.hasChildNodes()) {
				cloneContent.unshift(newFirstSubItem);
			}
		}

		// Transfer elements from temp array to the cloned shell element
		for (const el of cloneContent) {
			if (el.hasChildNodes()) {
				newFirstItem?.appendChild(el);
			}
		}

		// Add the element to the newPageContent array if has childNodes
		if (newFirstItem?.hasChildNodes()) {
			newPageContent.unshift(newFirstItem);
		}

		if (newPageContent?.length) {
			const newContent = this._renderer.createElement('div');
			this._renderer.addClass(newContent, 'content');

			for (let node of newPageContent) {
				this._renderer.appendChild(newContent, node);
			}

			const newBody = this._renderer.createElement('div');
			this._renderer.addClass(newBody, 'body');
			this._renderer.appendChild(newBody, newContent);

			const newSheet = this._renderer.createElement('div');
			this._renderer.addClass(newSheet, 'sheet');
			this._renderer.appendChild(newSheet, newBody);
			this._renderer.appendChild(newSheet, footer);

			this._renderer.appendChild(this._host.nativeElement, newSheet);

			this._updateSheets(newContent);
		}
	}
}
