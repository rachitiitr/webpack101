import React from 'react';
import {add, mult} from "./math";
import { prefixDecorate } from "./stringUtil";
import { WelcomeMessage } from "./WelcomeMessage";
import {createRoot} from "react-dom/client";

console.log(prefixDecorate('Hello, learning webpack'));
console.log(add(3,4));
console.log(add(13,4));
console.log(mult(13,4));
console.log(mult(13,4));

createRoot(document.body).render(<WelcomeMessage person="rachit"/>);