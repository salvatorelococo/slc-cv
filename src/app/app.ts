import { registerLocaleData } from '@angular/common';
import localeEnGb from '@angular/common/locales/en-GB';
import localeIt from '@angular/common/locales/it';
import {
	ChangeDetectionStrategy,
	Component,
	inject,
	OnInit,
} from '@angular/core';

import { SlcCv } from './components/slc-cv/slc-cv';
import { APP_CONFIG } from './app.config';
import { FabOption } from './models/generic.model';
import { Locale } from './models/curriculum.model';
import { RemixIcon } from './models/icons.model';
import { changeColorHue } from './utils/generic.util';
import { TranslationService } from './services/translation';
import { SlcInputHue } from './components/slc-elements/slc-input-hue/slc-input-hue';
import { SlcButtonFab } from './components/slc-elements/slc-button-fab/slc-button-fab';

registerLocaleData(localeIt);
registerLocaleData(localeEnGb);

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.scss',
	imports: [SlcButtonFab, SlcCv, SlcInputHue],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
	protected readonly settingsOptions: FabOption[] = this._getSettingOptions();

	private readonly _translationService = inject(TranslationService);

	ngOnInit(): void {
		this._initClasses();
	}

	protected onColorChange(hue: number): void {
		const varNames = [
			'--a-hover-bg-color',
			'--gradient-left-color',
			'--gradient-right-color',
			'--image-bg-color',
			'--primary-color',
		];

		for (let varName of varNames) {
			const newColor = changeColorHue(varName, hue);
			if (!newColor) continue;
			document.documentElement.style.setProperty(varName, newColor);
		}
	}

	private _getSettingOptions(): FabOption[] {
		return [
			{
				action: () => this._translationService.switchLanguage(),
				label: {
					[Locale.EN]: `Switch language 🇬🇧 <i class="${RemixIcon.RiArrowRightFill}"></i> 🇮🇹`,
					[Locale.IT]: `Cambia lingua 🇮🇹 <i class="${RemixIcon.RiArrowRightFill}"></i> 🇬🇧`,
				},
			},
			{
				action: () => {
					const cvEn = '/Salvatore Lo Coco - Curriculum Vitae (EN).pdf';
					const cvIt = '/Salvatore Lo Coco - Curriculum Vitae (IT).pdf';

					window.open(
						this._translationService.locale === Locale.IT ? cvIt : cvEn,
					);
				},
				icon: RemixIcon.RiDownloadFill,
				label: {
					[Locale.EN]: 'Download CV',
					[Locale.IT]: 'Scarica CV',
				},
			},
			{
				action: print,
				icon: RemixIcon.RiPrinterFill,
				label: {
					[Locale.EN]: 'Print',
					[Locale.IT]: 'Stampa',
				},
			},
			APP_CONFIG.showShadows
				? {
						action: () => {
							document.body.classList.toggle('no-shadows');
						},
						label: {
							get [Locale.EN]() {
								return (
									(document.body.classList.contains('no-shadows')
										? 'Show'
										: 'Hide') + ' shadows'
								);
							},
							get [Locale.IT]() {
								return (
									(document.body.classList.contains('no-shadows')
										? 'Mostra'
										: 'Nascondi') + ' ombre'
								);
							},
						},
					}
				: null,
			APP_CONFIG.showIcons
				? {
						action: () => {
							document.body.classList.toggle('no-icons');
						},
						label: {
							get [Locale.EN]() {
								return (
									(document.body.classList.contains('no-icons')
										? 'Show'
										: 'Hide') + ' icons'
								);
							},
							get [Locale.IT]() {
								return (
									(document.body.classList.contains('no-icons')
										? 'Mostra'
										: 'Nascondi') + ' icone'
								);
							},
						},
					}
				: null,
		].filter((option: FabOption | null) => option) as FabOption[];
	}

	private _initClasses() {
		if (!APP_CONFIG.showIcons) {
			document.body.classList.add('no-icons');
		}

		if (!APP_CONFIG.showShadows) {
			document.body.classList.add('no-shadows');
		}
	}
}
