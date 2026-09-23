
/*let students = [

  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },
  { name: "Ayman", grade: 17 },
  { name: "Mohammed", grade: 19 },
  { name: "Ahmed", grade: 8 }




];




let namee = "    Ahmed"
console.log(namee.length)


let isFound = false 

for(let student of students)
{
  if(student.name === namee){
    console.log(`${student["name"]}, ${student.grade}`)
    isFound = true
    break
  }

}


if(!isFound)
 console.log("Not Found !!")


console.log("Fin!!")*/

import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true }); 

let students = [
  { name: "Sara", grade: 15 },
  { name: "Karim", grade: 9 },
  { name: "Lina", grade: 18 },
  { name: "Ayman", grade: 17 },
  { name: "Mohammed", grade: 19 },
  { name: "Ahmed", grade: 8 }
];

let namee = prompt("print student to search: ");

console.log(namee.length);

let isFound = false; 

for(let student of students) {
  if(student.name === namee){
    console.log(`${student["name"]}, ${student.grade}`);
    isFound = true;
    break;
  }
}

if(!isFound)
 console.log("Not Found !!");

console.log("Fin!!");





