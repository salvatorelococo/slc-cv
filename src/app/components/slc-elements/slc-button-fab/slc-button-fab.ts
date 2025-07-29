import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RemixIcon } from '../../../models/icons.model';
import { FabOption } from '../../../models/generic.model';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
	selector: 'slc-button-fab',
	imports: [TranslatePipe],
	templateUrl: './slc-button-fab.html',
	styleUrl: './slc-button-fab.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlcButtonFab {
	readonly options = input<FabOption[]>();
	isOpen = false;

	RemixIcon = RemixIcon;

	toggle() {
		this.isOpen = !this.isOpen;
	}

	onOptionClick(action: () => void) {
		this.isOpen = false;
		action();
	}
}
