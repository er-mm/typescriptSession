import { Model } from './Model';

export class View<T extends Model<K>, K> {
  constructor(public model: T) {}

  printDetails(): void {
    console.log(this.model.details());
  }
}

