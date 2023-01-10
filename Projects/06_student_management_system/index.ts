class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name
    }
}

class Student extends Person {
    rollNumber: number;
    courses: Course[] = []

    constructor(name: string, age: number, rollNumber: number) {
        super(name, age)
        this.rollNumber = rollNumber
    }

    registerForCourses(...courses: Course[]) {
        this.courses.push(...courses)
    }
}

class Instructor extends Person {
    private salary: number
    courses: Course[] = []
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary;
    }
    
    assignCourses(...courses: Course[]) {
        this.courses.push(...courses)
    }
}

class Course {
    id:number
    name:string
    students:Student[]=[]
    instructors:Instructor[]=[]

    constructor(id:number,name:string){
        this.id=id;
        this.name=name;
    }

    addStudent(student:Student){
        this.students.push(student)
        student.registerForCourses(this)
    }

    setInstructor(instructor:Instructor){
        this.instructors.push(instructor)
        instructor.assignCourses(this)
    }
}

class Department {
    name:string
    courses:Course[]=[]

    constructor(name:string) {
        this.name=name;
    }

    addCourse(...course:Course[]){
        this.courses.push(...course)
    }
}

    

let s1 = new Student('Sajid', 24, 5);
let t1=new Instructor('Zia',30,10000000)
let c1=new Course(1,"Metaverse")
let d1=new Department("CS")

c1.addStudent(s1);  //Add a student into a course
t1.assignCourses(c1)  //Assign course to an instructor
d1.addCourse(c1);    //Add course to a department

console.log(s1);
console.log(t1);