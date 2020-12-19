// ts-node module globally installed
// npm -g upgrade typescript

export class Window {
	open: boolean = false;
	height: number;
	width: number;

	constructor(height: number, width: number) {
		this.height = height;
		this.width = width;
	}

	toggleOpen(): void {
		this.open = !this.open;
	}

	area(): number {
		return this.height * this.width;
	}
}
