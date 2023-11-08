#!/usr/bin/env node


class School{
    name:string;
    
    students:Student[]=[];
    teachers:Teacher[]=[];

    addStudent(stdObj:Student){
        this.students.push(stdObj)
    } 

    addTeacher(teachObj:Teacher){
        this.teachers.push(teachObj)
    }

    constructor(name:string){
        this.name = name;
   }
}   

class Student{
    name: string;
    age: number;
    schoolName: string;

    constructor(name:string,age:number,schoolName:string){
        this.name=name;
        this.age=age;
        this.schoolName=schoolName;
    }
}

class Teacher extends Student {}

let school1 = new School("Alpha")
let school2 = new School("City")

let s1 = new Student("Shag" ,40,school1.name)
let s2 = new Student("Bilo" ,45,school1.name)
let s3 = new Student("Arif" ,50,school1.name)


let t1 = new Teacher("Hadi" ,60,school1.name)
let t2 = new Teacher("Zia"  ,70,school2.name)
let t3 = new Teacher("Imran",75,school2.name)

school1.addStudent(s1)
school2.addStudent(s2)
school2.addStudent(s3)

school1.addTeacher(t1)
school2.addTeacher(t2)
school2.addTeacher(t3)

// console.log(t1)
// console.log(t2)
// console.log(t3)

console.log(school1);
console.log(school2);