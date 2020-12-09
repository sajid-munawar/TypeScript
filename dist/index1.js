"use strict";
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
var Student = /** @class */ (function () {
    function Student(name, rollNo, course) {
        this.name = name;
        this.rollNo = rollNo;
        this.course = course;
    }
    return Student;
}());
var std1 = new Student("ali", 5, "javascript");
console.log(std1.name);
console.log(std1.rollNo);
console.log(std1.course);
