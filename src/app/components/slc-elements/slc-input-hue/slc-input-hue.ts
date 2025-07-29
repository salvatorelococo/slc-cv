import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	OnInit,
	Output,
} from '@angular/core';
import { getColorHsla } from '../../../utils/generic.util';

@Component({
	selector: 'slc-input-hue',
	imports: [],
	templateUrl: './slc-input-hue.html',
	styleUrl: './slc-input-hue.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlcInputHue implements OnInit {
	protected hue = 0;
	protected saturation = 100;
	protected lightness = 50;

	@Output() colorChange = new EventEmitter<number>();

	ngOnInit(): void {
		this._initColor();
	}

	private _initColor() {
		const varName = '--primary-color';

		const hsla = getColorHsla(varName);
		if (!hsla) return;

		[this.hue, this.saturation, this.lightness] = hsla;
	}

	protected onHueChange(event: Event) {
		const value = +(event.target as HTMLInputElement).value;
		this.hue = value;
		this.colorChange.emit(this.hue);
	}

	protected onKeyDown(event: KeyboardEvent) {
		const ignoredKeys = ['ArrowLeft', 'ArrowRight', 'Left', 'Right'];
		if (ignoredKeys.includes(event.key)) event.preventDefault();
	}
}
