//export default is for only one thing and is usualy used for the class
export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`user's name is ${user.name}`);
}
export function printAge(user) {
  console.log(`user is ${user.age} years old`);
}
//export default User
//export {printName , printAge }
