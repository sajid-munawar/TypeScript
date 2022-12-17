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