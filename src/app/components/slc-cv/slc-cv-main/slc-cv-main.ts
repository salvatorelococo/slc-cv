import { CommonModule } from '@angular/common';
import { Component, input, ViewEncapsulation } from '@angular/core';

import { SlcChipList } from '../../slc-elements/slc-chip-list/slc-chip-list';
import { SlcItemD } from '../../slc-items/slc-item-d/slc-item-d';
import { SlcItemC } from '../../slc-items/slc-item-c/slc-item-c';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import {
	ItemC,
	ItemD,
	ItemType,
	Section,
	Skill,
} from '../../../models/curriculum.model';

@Component({
	selector: 'slc-cv-main',
	imports: [CommonModule, SlcChipList, SlcItemD, SlcItemC, TranslatePipe],
	templateUrl: './slc-cv-main.html',
	styleUrl: './slc-cv-main.scss',
	encapsulation: ViewEncapsulation.None,
})
export class SlcCvMain {
	sectionsList = input.required<Section[]>();

	protected readonly ItemType = ItemType;

	protected getItemColumnClass(item: ItemC | ItemD | Skill): string {
		return item.itemType === ItemType.D && item.columns
			? `col-${item.columns}`
			: '';
	}

	protected getItemsList(section: Section): (ItemD | ItemC)[] {
		return section?.itemsList.filter((i): i is ItemC | ItemD =>
			[ItemType.C, ItemType.D].includes(i.itemType),
		);
	}

	protected getSkills(section: Section): Skill[] {
		return (
			section?.itemsList?.filter(
				(i): i is Skill => i.itemType === ItemType.E,
			) || []
		);
	}
}
