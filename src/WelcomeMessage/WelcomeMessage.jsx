import "./WelcomeMessage.css";

/**
 * 
 * @param {{person: string}} param0 
 * @returns 
 */
export function WelcomeMessage({person}) {
    return <div>Hi {person.toUpperCase()}, great to see you learn Webpack!</div>
}