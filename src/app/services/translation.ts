import { Injectable, signal } from '@angular/core';
import { Locale } from '../models/curriculum.model';

@Injectable({
	providedIn: 'root',
})
export class TranslationService {
	private _locale: Locale = Locale.EN;

	public get locale(): Locale {
		return this._locale;
	}

	public set locale(value: Locale) {
		this._locale = value;

		// Emit signal with the new value
		this.locale$.set(this._locale);

		const lang = {
			[Locale.EN]: 'EN',
			[Locale.IT]: 'IT',
		}[this._locale];

		// Update html lang attribute
		document.documentElement.lang = lang.toLowerCase();

		// Update document title
		document.title = `Salvatore Lo Coco - Curriculum Vitae (${lang})`;
	}

	public locale$ = signal<Locale>(this._locale);

	public switchLanguage() {
		this.locale = Locale.IT === this._locale ? Locale.EN : Locale.IT;
	}
}
