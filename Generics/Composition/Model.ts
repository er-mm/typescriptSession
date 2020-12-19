export interface ModelAttributes<T> {
  get: <K extends keyof T>(key: K) => T[K];
}

export abstract class Model<T> {
  constructor(private attributes: ModelAttributes<T>) {}
  get = this.attributes.get;

  abstract details(): string;
}
