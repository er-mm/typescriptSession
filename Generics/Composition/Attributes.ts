export class Attributes<T> {
	constructor(private data: T) {}

	// get = (propName: string): number | string | boolean => {
	//   return this.data[propName];
	// };

	//// Advance Type Generics around method definition
	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};
}
