import { SafeHtml } from '@angular/platform-browser';
import { RemixIcon } from './icons.model';

export interface CurriculumVitae {
	imageUrl: string;
	jobTitle: LocalizedData<string>;
	personalInfo: PersonalInfo;
	sectionsList: Section[];
	sideItemsList: (ItemA | ItemB)[];
}

export interface PersonalInfo {
	birthDate: string; // Not translatable
	lastName: string; // Not translatable
	mail: string; // Not translatable
	name: string; // Not translatable
	phoneNumber: string; // Not translatable
}

export interface BaseItem {
	title: Title;
}

export interface Title {
	icon?: RemixIcon; // Not translatable
	text: LocalizedData<string | SafeHtml>;
}

export enum ItemType {
	A,
	B,
	C,
	D,
	E,
}

export interface ItemA extends BaseItem {
	description: LocalizedData<string | SafeHtml>;
	readonly itemType: ItemType.A;
}

export interface ItemB extends BaseItem {
	sortList?: boolean;
	valuesList: Value[];
	readonly itemType: ItemType.B;
}

export interface Value {
	columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // Not translatable
	href?: string; // Not translatable
	icon?: RemixIcon; // Not translatable
	text: LocalizedData<string | SafeHtml>;
}

export interface Section {
	title: Title;
	itemsList: (ItemC | ItemD | Skill)[];
}

export interface ItemC extends BaseItem {
	place?: Place;
	from?: string; // Not translatable
	to?: string; // Not translatable
	descriptionsList?: LocalizedData<(string | SafeHtml)[]>;
	skillsList?: Skill[];
	readonly itemType: ItemType.C;
}

export interface Place {
	href?: string; // Not translatable
	text: string; // Not translatable
}

export interface Skill {
	icon?: RemixIcon; // Not translatable
	starred?: boolean; // Not translatable
	text: LocalizedData<string>;
	readonly itemType: ItemType.E;
}

export interface ItemD extends BaseItem {
	columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // Not translatable
	subtitle?: LocalizedData<string | SafeHtml>;
	readonly itemType: ItemType.D;
}

export enum Locale {
	EN = 'en-GB',
	IT = 'it-IT',
}

export type LocalizedData<T> = {
	[key in Locale]?: T;
};
