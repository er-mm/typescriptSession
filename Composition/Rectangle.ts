import { Shape } from './Shape';

export interface RectangleProps {
	height: number;
	width: number;
}

export class Rectangle implements Shape {
	constructor(public details: RectangleProps) {}

	get height(): number {
		return this.details.height;
	}

	get width(): number {
		return this.details.width;
	}

	area(): number {
		return this.height * this.width;
	}
}
