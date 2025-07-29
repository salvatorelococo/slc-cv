import { Component, input } from '@angular/core';
import { ItemD } from '../../../models/curriculum.model';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import {
	Colors,
	SlcItemTitle,
} from '../../slc-elements/slc-item-title/slc-item-title';

@Component({
	selector: 'slc-item-d',
	imports: [TranslatePipe, SlcItemTitle],
	templateUrl: './slc-item-d.html',
	styleUrl: './slc-item-d.scss',
})
export class SlcItemD {
	public readonly item = input.required<ItemD>();

	protected readonly Colors = Colors;
}
