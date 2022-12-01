// Union

let thinker: string | null= null ;

if(Math.random()>0.5){
    thinker='Ok'
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
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
// admiral.toFixed();
//
// ~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string'.

let inventor: number | string = "Hedy Lamarr";

inventor=5; //we can change the type later

// Literal types

let myName :'sajid';

// firstName="munawar"  Type '"munawar"' is not assignable to type '"sajid"'

myName= 'sajid';

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

type WithFirstName = {
    firstName: string;
    };
    type WithLastName = {
    lastName: string;
    };
    const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
    };
    // Ok: `hasBoth` contains a `firstName` property of type `string`
    let withFirstName: WithFirstName = hasBoth;
    // Ok: `hasBoth` contains a `lastName` property of type `string`
    let withLastName: WithLastName = hasBoth;

    console.log(withFirstName);

    console.log(withLastName)

    

