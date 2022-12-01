"use strict";
// Union
Object.defineProperty(exports, "__esModule", { value: true });
let thinker = null;
if (Math.random() > 0.5) {
    thinker = 'Ok';
}
// console.log(thinker)
// Union Properties
let physicist = Math.random() > 0.5
    ? "Marie Curie"
    : 84;
physicist.toString(); // Ok
// physicist.toUpperCase();
// Narrowing
// Assignment Narrowing
let admiral;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
// admiral.toFixed();
//
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.
let inventor = "Hedy Lamarr";
inventor = 5; //we can change the type later
// Literal types
let myName;
// firstName="munawar"  Type '"munawar"' is not assignable to type '"sajid"'
myName = 'sajid';
// const firstName: string = null;
// let nameMaybe = Math.random() > 0.5
// ? "Tony Hoare"
// : undefined;
// nameMaybe.toLowerCase();
let geneticist = Math.random() > 0.5
    ? "Barbara McClintock"
    : undefined;
if (geneticist) {
    geneticist.toUpperCase(); // Ok: string
}
// geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.
geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase();
const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
};
// Ok: `hasBoth` contains a `firstName` property of type `string`
let withFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string`
let withLastName = hasBoth;
console.log(withFirstName);
console.log(withLastName);
