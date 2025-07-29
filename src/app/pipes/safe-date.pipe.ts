import { Pipe, PipeTransform, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslationService } from '../services/translation';

@Pipe({ name: 'safeDate', pure: false, standalone: true })
export class SafeDatePipe implements PipeTransform {
	private readonly _translationService = inject(TranslationService);

	transform(
		value: string,
		format: string = 'medium',
		fallback: string = value,
	): string {
		const datePipe = new DatePipe(this._translationService.locale);

		try {
			return datePipe.transform(value, format) ?? fallback;
		} catch {
			return fallback;
		}
	}
}
