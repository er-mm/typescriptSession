import { Shape } from './Shape';

export interface CircleProps {
	radius: number;
}

export class Circle implements Shape {
	constructor(public details: CircleProps) {}

	get radius(): number {
		return this.details.radius;
	}

	area(): number {
		return Math.PI * Math.pow(this.radius, 2);
	}
}
