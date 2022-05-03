import {add, mult} from "./math";
import { prefixDecorate } from "./stringUtil";
import { WelcomeMessage } from "./WelcomeMessage";

console.log(prefixDecorate('Hello, learning webpack'));
console.log(add(3,4));
console.log(add(13,4));
console.log(mult(13,4));
console.log(mult(13,4));

const WelcomeMessageText = WelcomeMessage({person: "rachit"});

const WelcomeMessageDiv = document.createElement('div');
WelcomeMessageDiv.innerText = WelcomeMessageText;
document.body.appendChild(WelcomeMessageDiv);
