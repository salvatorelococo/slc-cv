import { SafeHtml } from '@angular/platform-browser';
import { LocalizedData } from '../models/curriculum.model';
import { TranslatePipe } from '../pipes/translate.pipe';

export function changeColorHue(
	cssVarName: string,
	hue: number,
): string | undefined {
	const hsla = getColorHsla(cssVarName);
	if (!hsla) return;

	const [, s, l, a] = hsla;

	return `hsla(${hue}, ${s}%, ${l}%, ${a / 100})`;
}

export function getColorHsla(
	cssVarName: string,
): [number, number, number, number] | undefined {
	const style = getComputedStyle(document.documentElement);
	const currentColor = style.getPropertyValue(cssVarName).trim();

	const rgba = parseCSSColor(currentColor);
	if (!rgba) return;

	return rgbaToHsla(rgba.r, rgba.g, rgba.b, rgba.a);
}

export function getCompareLocalizedDataCallback(
	translatePipe: TranslatePipe<string | SafeHtml>,
) {
	return (
		a: LocalizedData<string | SafeHtml>,
		b: LocalizedData<string | SafeHtml>,
	) => (translatePipe.transform(a) > translatePipe.transform(b) ? 1 : -1);
}

export function parseCSSColor(
	str: string,
): { r: number; g: number; b: number; a: number } | null {
	const ctx = document.createElement('canvas').getContext('2d');
	if (!ctx) return null;

	try {
		ctx.fillStyle = str;

		ctx.fillRect(0, 0, 1, 1);
		const data = ctx.getImageData(0, 0, 1, 1).data;

		return {
			r: data[0],
			g: data[1],
			b: data[2],
			a: data[3],
		};
	} catch (e) {
		console.error(e);
		return null;
	}
}

export function rgbaToHsla(
	r: number,
	g: number,
	b: number,
	a: number = 255,
): [number, number, number, number] {
	r /= 255;
	g /= 255;
	b /= 255;
	a /= 255;
	const max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	let h = 0,
		s,
		l = (max + min) / 2;

	if (max === min) {
		h = s = 0;
	} else {
		const d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h *= 60;
	}

	return [
		Math.round(h),
		Math.round(s * 100),
		Math.round(l * 100),
		Math.round(a * 100),
	];
}
