// remove the ts config file
//// Advance Type Generics around method definition
interface PersonProps {
	id: number;
	name: string;
	age?: number;
	isIndian: boolean;
}

export class User {
	constructor(private data: PersonProps) {}
  
  // // Get Method to get the values out of the data
  // get(key: string): number | boolean | string {
	// 	return this.data[key];
	// }

	get<T extends keyof PersonProps>(key: T): PersonProps[T] {
		return this.data[key];
	}
}

const user = new User({ id:1, name:'Mayank', age:24, isIndian:true})
// const name = user.get("id");

// export class Admins {
//   constructor(private data: PersonProps) {}
//   get(key: string) {
//     return this.data[key];
//   }
// }

// create Parent Attributes Class
import { Attributes } from './Attributes';
class User2 extends Attributes<PersonProps> {}
const fazlu = new User2({ id: 1, name: 'fazlu', age: 34, isIndian: true });
const name = fazlu.get('age');

console.log(name);
