// let a:any =123
// let b:any =["abc"]
// let c=a+b
// console.log(c)

// let f:true=true;
//  f=true

// let a = 123
// let b = Infinity * 0.10
// const c = 456
// let d = a>b
// console.log(d) 
// let a = 1234n 

// let a:symbol = Symbol ["a"]

// let a:{b:string} = {
//     b:"Hello"
// }
// console.log(a.b)
// console.log(a.b)

// type Person = {
//     fistname:string
//     lastname:string
// }

// let per1:Person = {
//    fistname: "sajid",
//    lastname: "munawar"
// }
// console.log(per1.fistname)

// let c :{firstname:string
//      lastname:string}
//       = {
//     firstname:"sajid",
//     lastname:"ali"
// }

// class Person{
//     constructor (public firstname:string,
//         public lastname:string) {}
// }
// let c = new Person ("sajid","ali")
// console.log(c.firstname)


// class Student {
//     constructor( public name:string,
//         public rollNo:number,
//         public course:string){}
// }
// let std1=new Student ("ali",5,"javascript")
// console.log(std1.name)
// console.log(std1.rollNo)
// console.log(std1.course)

// let a:{b:string}
// a ={}  // if we miss a parameter then error
// a={b:"ali"}
// a={b:"aa",c:"dd"} //if we give extra parameter then error


// let i:number =5
// let d= i*5
// i=7
// d=4*i
// console.log(d)

// let a :{firstname:string}
// a={firstname:"ali"}
// console.log(a.firstname)
// a={firstname:"ahmad"}
// console.log(a.firstname)

// let a:{readonly firstname:string}
// a={firstname:"ali"}
// a={firstname:"ahmad"}
// console.log(a.firstname)

// let a:{readonly firstname:string} //=  {firstname:"ali"}


// let a:{readonly fname:string} = {fname:"ali"}
// a.fname="ahmad"


// let a :{readonly fname:string}={fname:"ali"}
// a.fname
// a.fname="ahmad"             // cannot assign because its readonly
// console.log(a.fname)

