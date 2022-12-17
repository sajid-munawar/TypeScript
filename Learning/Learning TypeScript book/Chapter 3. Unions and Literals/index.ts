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