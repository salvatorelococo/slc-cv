import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { ItemB, Value } from '../../../models/curriculum.model';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { SlcLinkOrText } from '../../slc-elements/slc-link-or-text/slc-link-or-text';
import { SlcItemTitle } from '../../slc-elements/slc-item-title/slc-item-title';
import { getCompareLocalizedDataCallback } from '../../../utils/generic.util';
import { SafeHtml } from '@angular/platform-browser';
import { TranslationService } from '../../../services/translation';

@Component({
	selector: 'slc-item-b',
	imports: [CommonModule, TranslatePipe, SlcLinkOrText, SlcItemTitle],
	templateUrl: './slc-item-b.html',
	styleUrl: './slc-item-b.scss',
})
export class SlcItemB {
	public readonly item = input.required<ItemB>();

	private readonly _translatePipe = new TranslatePipe<SafeHtml>();
	private readonly _translationService = inject(TranslationService);

	protected readonly valuesList = computed(() => {
		this._translationService.locale$(); // Triggers update on language change

		return this.item().sortList
			? this.item().valuesList.sort((a: Value, b: Value) => {
					return getCompareLocalizedDataCallback(this._translatePipe)(
						a.text,
						b.text,
					);
				})
			: this.item().valuesList;
	});
}
