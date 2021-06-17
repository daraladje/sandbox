// Run compiler in watch mode: tsc types.ts -w (compiles everytome you save)

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

let strArr: string[];
let numArr: number[];
let boolArr: Array<boolean>;

let strNumTuple: [string, number];

myString = 'Hello World';
myNum = 22;
myBool = true;

strArr = ['Dara', 'Eldar'];
numArr = [1, 2, 3];
boolArr = [true, false, false];

strNumTuple = ['Hello', 1];

let myVoid: void = null;

console.log(myString);
