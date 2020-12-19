import type { Shape } from './Shape';
// import { Rectangle, RectangleProps } from './Rectangle';
// import { Circle } from './Circle';

export class Window {
	// static buildRectangleWindow(shape: RectangleProps): Window {
	// 	return new Window(new Rectangle(shape));
	// }

	open: boolean = false;
	constructor(private dimensions: Shape) {}

	// why getter is required ?????????
	get area() {
		return this.dimensions.area;
	}

	toggleOpen(): void {
		this.open = !this.open;
	}
}

// const window = new Window(new Rectangle({ height: 1, width: 2 }));
// const area = window.area();

// const circularWindow = new Window(new Circle({ radius: 5 }));
// const circleArea = circularWindow.area();

// const rectangleWindow = Window.buildRectangleWindow({ height: 1, width: 2});


// differnt from mixin and multi level inheritance