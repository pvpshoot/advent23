
import * as R from 'ramda';
const digitsMap = {
    'one': 1, 
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
}
const digits = Object.keys(digitsMap);

const isNumber = s => Number.isInteger(Number(s));

const getFirstNumber = s => {
    if(s.length <= 0) return null;
    const maybeNumber = s[0];
    if(isNumber(maybeNumber)) return maybeNumber;
    const maybeDigit = digits.reduce((acc, cur) => {
        if(acc) return acc;
        if(R.startsWith(cur, s)) return cur;
        return acc;
    }, null)

    if(maybeDigit){
        return digitsMap[maybeDigit]
    }
    
    return getFirstNumber(R.drop(1, s));
}

const getLastNumber = s => {
    if(s.length <= 0) return null;
    const maybeNumber = R.last(s);
    if(isNumber(maybeNumber)) return maybeNumber;
    const maybeDigit = digits.reduce((acc, cur) => {
        if(acc) return acc;
        if(R.endsWith(cur, s)) return cur;
        return acc;
    }, null)

    if(maybeDigit){
        return digitsMap[maybeDigit]
    }
    
    return getLastNumber(R.dropLast(1, s));
}

export const getNumberFromRow = row => {
    const begin = getFirstNumber(row);
    const end = getLastNumber(row);
    return `${begin}${end}`
}

const main = async (input) => {
    const numbers = R.pipe(
        R.trim,
        R.split('\n'),
        R.map(s => getNumberFromRow(s)),
        R.map(n => Number(n)),
        R.sum
    )(input);
    return numbers
};


export default main;