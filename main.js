import User , {printName , printAge} from '/user.js'

let user = new User('hehe', 100)
console.log(user);
printName(user)
printAge(user)