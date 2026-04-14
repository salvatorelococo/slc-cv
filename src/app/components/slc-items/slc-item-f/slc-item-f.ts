import { Component, input } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { ItemF, WorkInfo } from '../../../models/curriculum.model';
import { SlcLinkOrText } from '../../slc-elements/slc-link-or-text/slc-link-or-text';
import { SafeDatePipe } from '../../../pipes/safe-date.pipe';
import { SlcChipList } from '../../slc-elements/slc-chip-list/slc-chip-list';
import {
	Colors,
	SlcItemTitle,
} from '../../slc-elements/slc-item-title/slc-item-title';

@Component({
	selector: 'slc-item-f',
	imports: [TranslatePipe, SlcLinkOrText, SlcChipList, SlcItemTitle],
	templateUrl: './slc-item-f.html',
	styleUrl: './slc-item-f.scss',
})
export class SlcItemF {
	public readonly item = input.required<ItemF>();

	protected readonly Colors = Colors;
	private readonly _safeDatePipe: SafeDatePipe;

	constructor() {
		this._safeDatePipe = new SafeDatePipe();
	}

	protected getPeriod(info: WorkInfo) {
		const { from = null, to = null } = info;

		if (!from && !to) return null;
		if (!from) return this._safeDatePipe.transform(to!, 'MMMM yyyy');
		if (!to) return this._safeDatePipe.transform(from, 'MMMM yyyy');

		return (
			this._safeDatePipe.transform(from, 'MMMM yyyy') +
			' - ' +
			this._safeDatePipe.transform(to, 'MMMM yyyy')
		);
	}
}
