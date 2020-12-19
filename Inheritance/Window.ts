import { Rectangle } from './Rectangle';

// inheritance is like copy pasting
export class Window extends Rectangle {
	open: boolean = false;

	toggleOpen(): void {
		this.open = !this.open;
	}
}
