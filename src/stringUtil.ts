type decorator = '*' | '#';

export function prefixDecorate(str: String, decorator: decorator = '*') {
    return `${decorator}${decorator}${decorator}${str}`
}

// console.log(prefixDecorate('demo', '$')); throws warning due to typescript