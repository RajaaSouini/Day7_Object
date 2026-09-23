let students = [

  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },

];

console.log("using simple for loop")
for(let i=0;i<students.length;i++)
  console.log(students[i].name)

console.log("using for..in loop")
for(let index in students)
  console.log(students[index].name)

console.log("using for..of loop")
for(let student of students)
  console.log(student.name)
/*
let students = [

  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },
  { name: "Ayman", grade: 17 },
  { name: "Mohammed", grade: 19 },
  { name: "Ahmed", grade: 8 }

];
 */
/*
console.log("Passed !!")
for(let i=0; i<students.length;i++)
  if(students[i].grade >= 10)
    console.log(${students[i].name}, ${students[i].grade})

console.log("Failed !!")
for(let student of students)
{
  if(student.grade < 10)
    console.log(${student.name}, ${student.grade})
} */
/*

let students = [

  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },
  { name: "Ayman", grade: 17 },
  { name: "Mohammed", grade: 19 },
  { name: "Ahmed", grade: 8 }




];




let name = prompt("print student to search: ")


let isFound = false 

for(let student of students)
{
  if(student.name === name){
    console.log(${student["name"]}, ${student.grade})
    isFound = true
    break
  }

}

if(!isFound)
 console.log("Not Found !!")


console.log("Fin!!")*/


// if(isFound) <==> if(isFound===true)
// if(!isFound) <==> if(isFound!==true)