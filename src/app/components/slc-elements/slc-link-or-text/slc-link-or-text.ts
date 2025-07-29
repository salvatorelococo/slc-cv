import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
	selector: 'slc-link-or-text',
	imports: [],
	templateUrl: './slc-link-or-text.html',
	styleUrl: './slc-link-or-text.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlcLinkOrText {
	public readonly link = input<string>();
	public readonly text = input<string>();
}
