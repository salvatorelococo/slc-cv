import {
	ChangeDetectionStrategy,
	Component,
	computed,
	HostBinding,
	inject,
	input,
} from '@angular/core';
import { SlcChip } from '../slc-chip/slc-chip';
import { Skill } from '../../../models/curriculum.model';
import { getCompareLocalizedDataCallback as getCompareLocalizedDataFunction } from '../../../utils/generic.util';
import { TranslatePipe } from '../../../pipes/translate.pipe';
import { TranslationService } from '../../../services/translation';
import { APP_CONFIG } from '../../../app.config';

@Component({
	selector: 'slc-chip-list',
	imports: [SlcChip],
	templateUrl: './slc-chip-list.html',
	styleUrl: './slc-chip-list.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlcChipList {
	readonly chipsList = input<Skill[] | undefined>([]);
	readonly sortChips = input<boolean>(true);

	@HostBinding('style.display')
	readonly display = APP_CONFIG.showChips ? null : 'none';

	private readonly _translatePipe = new TranslatePipe<string>();
	private readonly _translationService = inject(TranslationService);

	protected chips = computed(() => {
		this._translationService.locale$(); // Triggers update on language change

		return !this.sortChips()
			? this.chipsList()
			: this.chipsList()?.sort((a: Skill, b: Skill) => {
					if (a.starred && !b.starred) {
						return -1;
					}

					if (b.starred && !a.starred) {
						return 1;
					}

					const compareLocalizedData = getCompareLocalizedDataFunction(
						this._translatePipe,
					);
					return compareLocalizedData(a.text, b.text);
				});
	});
}
