// create a TS config file

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  // T can be any name we want but by convention we use T
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayString = new ArrayOfAnything<string>(['a', 'b', 'c']); // type infernce still works but should go with annotation

// Example of Generacis with functions

function printStrings(arr: string[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printNumbers(arr: number[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let item of arr) {
    console.log(item);
  }
}

printAnything<string>(['a', 'b', '3']); // Type Inference still works  // Always go with type inference except return type of functions and generics

// Generic Constraints
class Car {
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

function printHousesOrCars<T extends Printable>(arr: T[]) {
  for (let item of arr) {
    item.print(); // print does not exist
  }
}

// printHousesOrCars([1, 2, 3, 4]);

interface Printable {
  print(): void;
}

printHousesOrCars<House>([new House(), new House()]);


type MyNameType = 'Sachin';
function printMyName(name: MyNameType) {
  console.log(name);
}

// printMyName('Shivanshu');
printMyName('Sachin');

