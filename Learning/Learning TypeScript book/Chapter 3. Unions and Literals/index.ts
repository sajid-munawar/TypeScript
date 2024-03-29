// Chapter 3. Unions and Literals
// Union Types

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

// Declaring Union Types

let thinker: string | null = null;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer"; // Ok
}


// Union Properties
let physicist = Math.random() > 0.5
? "Marie Curie"
: 84;
physicist.toString(); // Ok
physicist.toUpperCase();
//
~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//
Property 'toUpperCase' does not exist on type 'number'.
physicist.toFixed();
//
~~~~~~~
// Error: Property 'toFixed' does not exist on type 'string | number'.
//
Property 'toFixed' does not exist on type 'string'.

//Assignment Narrowing
let admiral: number | string;
admiral = "Grace Hopper";
admiral.toUpperCase(); // Ok: string
admiral.toFixed();

// Conditional Checks
// Type of scientist: number | string
let scientist = Math.random() > 0.5
? "Rosalind Franklin"
: 51;
if (scientist === "Rosalind Franklin") {
// Type of scientist: string
scientist.toUpperCase(); // Ok
}
// Type of scientist: number | string
scientist.toUpperCase();
//
~~~~~~~~~~~
// Error: Property 'toUpperCase' does not exist on type 'string | number'.
//
Property 'toUpperCase' does not exist on type 'number'.

//Typeof Checks
let researcher = Math.random() > 0.5
? "Rosalind Franklin"
: 51;
if (typeof researcher === "string") {
researcher.toUpperCase(); // Ok: string
}

// Logical negations from ! and else statements work as well:
if (!(typeof researcher === "string")) {
researcher.toFixed(); // Ok: number
} else {
researcher.toUpperCase(); // Ok: string
}

// rewritten with a ternary statement
typeof researcher === "string" ? researcher.toUpperCase() // Ok: string
: researcher.toFixed(); // Ok: number

// Literal Types

//name: "Sajid"
const name='Sajid';

let age:boolean;
age=true;
age=false

let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
lifespan = true;
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'

// Literal Assignability

let specificallyAda: "Ada";
specificallyAda = "Ada"; // Ok
specificallyAda = "Byron";
// Error: Type '"Byron"' is not assignable to type '"Ada"'.
let someString = ""; // Type: string
specificallyAda = someString;
// Error: Type 'string' is not assignable to type '"Ada"'.

// Truthiness Narrowing

let geneticist = Math.random() > 0.5
? "Barbara McClintock"
: undefined;
if (geneticist) {
geneticist.toUpperCase(); // Ok: string
}
geneticist.toUpperCase();
// Error: Object is possibly 'undefined'.

geneticist && geneticist.toUpperCase()
geneticist?.toUpperCase();

let myStr=''

//biologist: string | false
let biologist = Math.random() > 0.5 && "Rachel Carson";

let mathematician1: string;
mathematician1?.length;



// Type Aliases
type RawData = boolean | number | string | null | undefined;
let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

// Combining Type Aliases
type Id = number | string;
// Equivalent to: number | string | undefined | null
type IdMaybe = Id | undefined | null;