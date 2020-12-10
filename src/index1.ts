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


// type Age = number
// type Person ={ 
//     fname:string
//     age:Age
// }
// let age:Age =55

// let driver:Person ={
//     fname:"ali",
//     age:age
// }
// console.log(driver.age)

// type color = "red"
// type color="green"

// type cat = {name:string , color:true}
// type dog ={fname:string , bark:true}

// type CatOrDog = cat | dog

// type CatAndDog=cat & dog

// let a:CatOrDog ={
//     fname:"aa",
//     bark:true
// }
// a ={
//     name:"aa",
//     color:true
// }
// let b:CatAndDog = {
//     name:"aa",
//     color:true,
//     fname:"bb",
//     bark:true
// }

// let h:number[]=[]
// h.push(1)
// console.log(h)
// h.push(2)
// console.log(h)
// h.push("a")


// function trueOrnull(isTrue:boolean){
//     if(isTrue){
//         return "true1"
//     } return null
// }
// console.log(trueOrnull(true));

// function BuildArray(){
//     let a=[]
//     a.push(1),
//     a.push("aa")
//     return a
// }
// let myarray=BuildArray()
// console.log(myarray)
// myarray.push("aaa")
// myarray.push(5)
// console.log(myarray)


// let a:[firstname:string,lastname:string,age:number]=["ali","ahmad",35]
// console.log(a[1])

// let arr:[{fname:string},string,number]=[{fname:"ali"},"ahmad",25]
// console.log(arr)

// let a:[string,string?]=["aa","aaa"]

// let arr: number[]=[1,2,3,4,5]
// arr.push(4)
// arr.unshift(4)
// arr[3]=222
// console.log(arr[3])

// let arr:readonly number[]=[1,2,3,4,5]
// arr[2]=5
// console.log(arr[2])

// // type b:readonlyArray<string>
// type b= ReadonlyArray<string>
// let a:ReadonlyArray<string>=["aa","bb"]

// function a(){
//     throw TypeError("I always error.")
// }
// let b=a()
// console.log(b)


// function a(){
//     return null
// }
// let b=a()
// console.log(b)

// function a(){
//     let b=2
//     let c=b*b
//     return c
// }
// let d=a()
// console.log(d)

// enum language  {
//     english,
//     chinese,
//     urdu=55,
// }
// console.log(language.urdu)
// let b:number=5*language.urdu
// console.log(b)

// enum language {
//     "english",
// }

 //             FUNCTIONS
// 

// Methods to declare function in typescipt

//          Named function
//  function greet1(name:string) {
//      return "Hello "+ name
//  }


// //        Function expression
// let greet2=function(name:string){
//     return "Hello "+name
// }

//           Arrow function

// let greet3= (name:string) =>{
//     return "Hello "+name
// }

//            Shortered Arrow function

// let greet4= (name:string) => 
//             "Hello "+name
// console.log(greet4("Sajid"))


            // Function Constructur

// let greet5= new Function("name", 'return "Hello " + name ')
//         console.log(greet5("Sajid"))

// let greet6= new Function('name', 'return  "Hello "+ name')
//         console.log(greet6("Sajid"))


// function log(message:string,userID?:string){
//     let time= new Date().toLocaleTimeString()
//     console.log(time,message,userID ||"Not signed in.") 
// }
// log(" Hello ")
// log (" hello ", "Abc")

// function log(message:string,userID?:string){
//     let time= new Date().toLocaleTimeString()
//     console.log(time,message,if (userID) {userID+ "signed in"} else{ "Not signed in."}) 
// }
// log(" Hello ")
// log (" hello ", "Abc")


// function log(message:string,userId="Not signed in"){
//     let time=new Date().toISOString()
//     console.log(time,message,userId)
// }
// log(" a boy just "," aabbcc ")
// log(" Hello world ")

// function log(name:string,userid?:string){
//     if (userid){
//         console.log(name,userid+" signed in")
//     }
//     else {
//         console.log(name," Not signed in")
//     }
// }
// log("Sajid")
// log("sajid","abc")

// var numbers:number[]=[2,3,4]
// console.log(numbers.reduce())

function sum (numbers:number[]):number {
    return numbers.reduce((total,n) => total+n,0)
}
let a=sum([1,2,3])
console.log(a);

