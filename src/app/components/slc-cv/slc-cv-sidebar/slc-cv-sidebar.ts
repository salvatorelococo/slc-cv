import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { SlcItemA } from '../../slc-items/slc-item-a/slc-item-a';
import { SlcItemB } from '../../slc-items/slc-item-b/slc-item-b';
import {
	ItemA,
	ItemB,
	ItemType,
	PersonalInfo,
} from '../../../models/curriculum.model';

@Component({
	selector: 'slc-cv-sidebar',
	imports: [CommonModule, SlcItemA, SlcItemB],
	templateUrl: './slc-cv-sidebar.html',
	styleUrl: './slc-cv-sidebar.scss',
})
export class SlcCvSidebar {
	imageUrl = input.required<string>();
	personalInfo = input.required<PersonalInfo>();
	jobTitle = input.required<string>();
	sideItemsList = input.required<(ItemA | ItemB)[]>();

	protected readonly ItemType = ItemType;
}
