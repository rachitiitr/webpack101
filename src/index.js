import {add, mult} from "./math";
import { WelcomeMessage } from "./WelcomeMessage";

console.log('Hello, learning webpack');
console.log(add(3,4));
console.log(add(13,4));
console.log(mult(13,4));
console.log(mult(13,4));

const WelcomeMessageDiv = WelcomeMessage({person: "rachit"});
console.log(WelcomeMessageDiv);