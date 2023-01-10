class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    registerForCourses(...courses) {
        this.courses.push(...courses);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourses(...courses) {
        this.courses.push(...courses);
    }
}
class Course {
    id;
    name;
    students = [];
    instructors = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourses(this);
    }
    setInstructor(instructor) {
        this.instructors.push(instructor);
        instructor.assignCourses(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(...course) {
        this.courses.push(...course);
    }
}
let s1 = new Student('Sajid', 24, 5);
let t1 = new Instructor('Zia', 30, 10000000);
let c1 = new Course(1, "Metaverse");
let d1 = new Department("CS");
c1.addStudent(s1); //Add a student into a course
t1.assignCourses(c1); //Assign course to an instructor
d1.addCourse(c1); //Add course to a department
console.log(s1);
console.log(t1);
export {};
