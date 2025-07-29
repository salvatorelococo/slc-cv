import { Component, input } from '@angular/core';
import { ItemA } from '../../../models/curriculum.model';

import { TranslatePipe } from '../../../pipes/translate.pipe';
import { SlcItemTitle } from '../../slc-elements/slc-item-title/slc-item-title';

@Component({
	selector: 'slc-item-a',
	imports: [TranslatePipe, SlcItemTitle],
	templateUrl: './slc-item-a.html',
	styleUrl: './slc-item-a.scss',
})
export class SlcItemA {
	public readonly item = input.required<ItemA>();
}
