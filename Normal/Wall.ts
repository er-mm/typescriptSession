export class Wall {
	constructor(
		public height: number,
		public width: number,
		public color: string
	) {}

	area(): number {
		return this.height * this.width;
	}

	changeColor(newColor: string) {
		this.color = newColor;
	}
}
