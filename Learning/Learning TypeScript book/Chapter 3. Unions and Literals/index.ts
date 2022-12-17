// Chapter 3. Unions and Literals
// Union Types

let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

// Declaring Union Types

let thinker: string | null = null;
if (Math.random() > 0.5) {
    thinker = "Susanne Langer"; // Ok
}