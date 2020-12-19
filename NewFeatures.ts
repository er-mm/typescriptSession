///////////////////////////////////////
///////////Optional Chaning////////////
///////////////////////////////////////

// type Obj = { a: number } | undefined;

// function objAToDecimalString(obj: Obj) {
//   return obj && obj.a.toFixed(2);
// }

// let obj: Obj = { a: 1 };
// console.log(objAToDecimalString(obj));

///////////////////////////////////////
///////////Differnece//////////////////
///////////////////////////////////////

type Obj = { a: number | null } | undefined;

function objAToDecimalString(obj: Obj) {
	return obj?.a?.toFixed(2);
}

let obj: Obj = { a: 0 };
console.log(objAToDecimalString(obj));

///////////////////////////////////////
///////////Nullish Coalescing//////////
///////////////////////////////////////

const tt = 0;

const ttr = tt || 5;

const ttr2 = tt ?? 5;

console.log(ttr, ttr2);

///////////////////////////////////////
///////////Private Fields/////////////
///////////////////////////////////////

// Change TS Config
// class Animal {
//   name: string = 'animal';
// 	#name: string = 'animal';
// 	printAnimalName(): void {
// 		console.log(this.name);
//   }
  
//   printAnimalFieldName(): void {
// 		console.log(this.#name);
// 	}
// }

// class Cat extends Animal {
//   name: string = 'cat';
// 	#name: string = 'Meow Meow';
// 	printCatName(): void {
// 		console.log(this.name);
//   }
  
//   printCatFieldName(): void {
// 		console.log(this.#name);
// 	}
// }

// const cat = new Cat();
// cat.printAnimalName();
// cat.printCatName();

// cat.printAnimalFieldName();
// cat.printCatFieldName();


///////////////////////////////////////
///////////Type Only Import//////////
///////////////////////////////////////

import type { Shape } from './Composition/Shape';
import { Rectangle } from './Composition/Rectangle';
import { Circle } from './Composition/Circle';

let shape: Shape;
shape = new Rectangle({ height: 2, width: 5 });
console.log(shape.area());

shape = new Circle({ radius: 2 });
console.log(shape.area());
