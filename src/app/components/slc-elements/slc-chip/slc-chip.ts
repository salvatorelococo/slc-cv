import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skill } from '../../../models/curriculum.model';
import { CommonModule } from '@angular/common';
import { RemixIcon } from '../../../models/icons.model';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
	selector: 'slc-chip',
	imports: [CommonModule, TranslatePipe],
	templateUrl: './slc-chip.html',
	styleUrl: './slc-chip.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlcChip {
	protected readonly RemixIcon = RemixIcon;
	chip = input<Skill>();
}
