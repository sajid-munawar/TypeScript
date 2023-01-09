let student:{
    name:string,
    age:number
}

student={
    name:'Ali',
    age:22,
    // height:44 gives error
}

let student1={
    name:'Ali',
    age:22,
    height:44 
}

//It does not give error here because it's a stale object not a fresh object
student=student1
// student.height
