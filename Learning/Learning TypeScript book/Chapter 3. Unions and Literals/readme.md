Unions  
Expanding a value’s allowed type to be two or more possible types

Narrowing  
Reducing a value’s allowed type to not be one or more possible types

Union Properties  
When a value is known to be a union type, TypeScript will only allow you
to access member properties that exist on all possible types in the union. It
will give you a type-checking error if you try to access a type that doesn’t
exist on all possible types.

Narrowing  
Narrowing is when TypeScript infers from your code that a value is of a
more specific type than what it was defined, declared, or previously inferred
as

Assignment Narrowing  
If you directly assign a value to a variable, TypeScript will narrow the
variable’s type to that value’s type.

Conditional Checks  
A common way to get TypeScript to narrow a variable’s value is to write an
if statement checking the variable for being equal to a known value.

Typeof Checks  
In addition to direct value checking, TypeScript also recognizes the typeof
operator in narrowing down variable types.

Type Aliases  
TypeScript includes type aliases for assigning easier names to reused types.
A type alias starts with the type keyword, a new name, =, and then any
type. By convention, type aliases are given names in PascalCase:

`type MyName = ...;`

Type aliases act as a copy-and-paste in the type system. When TypeScript
sees a type alias, it acts as if you’d typed out the actual type the alias wasreferring to.