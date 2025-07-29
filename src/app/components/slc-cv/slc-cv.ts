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

	private _updateSheets(): void {
		const content = document.querySelector(
			'.sheet .content.main-content',
		) as HTMLDivElement;
		let { offsetHeight, scrollHeight } = content;

		const footer = document.querySelector('.sheet .footer') as HTMLDivElement;
		const newPageContent = [];

		const getFooterHeight = () =>
			newPageContent?.length
				? footer.offsetHeight + 16 /* 16px of margin-top */
				: 0;

		while (scrollHeight - getFooterHeight() > offsetHeight) {
			newPageContent.unshift(content.removeChild(<Node>content.lastChild));
			scrollHeight = content.scrollHeight;
		}

		if (newPageContent.length) {
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
		}
	}
}
