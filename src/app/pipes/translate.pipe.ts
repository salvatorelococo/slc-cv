import { Pipe, PipeTransform, inject } from '@angular/core';
import { Locale, LocalizedData } from '../models/curriculum.model';
import { TranslationService } from '../services/translation';

@Pipe({ name: 'translate', pure: false, standalone: true })
export class TranslatePipe<T> implements PipeTransform {
	private readonly _translationService = inject(TranslationService);

	transform(value: LocalizedData<T>): T | '' {
		return value?.[this._translationService.locale] ?? value?.[Locale.EN] ?? '';
	}
}
