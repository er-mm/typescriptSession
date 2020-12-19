import { Rectangle, RectangleProps } from './Rectangle';

interface WallProps extends RectangleProps {
  color: string;
}

export class Wall extends Rectangle {
  color: string;

  constructor(wallDetails: WallProps) {
    super(wallDetails);
    this.color = wallDetails.color;
  }

  changeColor(newColor: string) {
    this.color = newColor;
  }
}
