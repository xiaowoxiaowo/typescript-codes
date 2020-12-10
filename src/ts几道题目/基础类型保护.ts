interface User {
  name: string
  age: number
  occupation: string
}

interface Admin {
  name: string
  age: number
  role: string
}

type Person3 = User | Admin;

// 这里需要修改
// function test3(person: Person3) {
//   let additionalInformation: string
//   if (person.role) {
//     additionalInformation = person.role;
//   } else {
//     additionalInformation = person.occupation;
//   }
// }
function test3(person: Person3) {
  let additionalInformation: string
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
}