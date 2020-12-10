// 这里需要补全
const users: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
];

// 这里需要补全
const test1 = (user: User) => {
  console.log(user.name);
  console.log(user.age);
}

users.forEach(test1);

// 解答
interface User {
  name: string
  age: number
  occupation: string
}
// 在这里不加类型也可以，ts会自动推导出来（不推荐）