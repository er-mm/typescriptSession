export interface RectangleProps {
  height: number;
  width: number;
}

export class Rectangle {
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


// typescript playground to explain difference 
// betwwen differnt type of constructors

// remove the getter and directly return value