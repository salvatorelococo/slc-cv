import { LocalizedData } from './curriculum.model';
import { RemixIcon } from './icons.model';

export interface FabOption {
	action: () => void;
	icon?: RemixIcon;
	label: LocalizedData<string>;
}
