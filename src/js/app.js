// import { Bowman } from "./Character";
// import { characters } from "./characters";

// const user = new Bowman("user");

// console.log(user);
// console.log(characters);

import Validator from "./usernameValidator";

const user = new Validator();

console.log(user.validateUsername("User_123-name"));

