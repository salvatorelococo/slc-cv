import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { Title } from '../../../models/curriculum.model';

export enum Colors {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

@Component({
	selector: 'slc-item-title',
	imports: [CommonModule, TranslatePipe],
	templateUrl: './slc-item-title.html',
	styleUrl: './slc-item-title.scss',
})
export class SlcItemTitle {
	public readonly color = input<Colors>();
	public readonly fontSizePx = input<number>(16);
	public readonly itemTitle = input<Title>();

	protected colorClass = computed(() => {
		return !this.color() ? null : 'slc-item-title-' + this.color;
	});

	protected fontSize = computed(() => {
		return (isNaN(this.fontSizePx()) ? 16 : this.fontSizePx()) + 'px';
	});
}
