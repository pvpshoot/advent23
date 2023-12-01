import fs from 'fs/promises';
import path from 'path'
import main from './index.mjs';


const input = await fs.readFile(path.join('01','input.01.txt'), 'utf-8');
const input2 = await fs.readFile(path.join('01','input.02.txt'), 'utf-8');

const response = await main(input);
const response2 = await main(input2);

console.log('SOLUTION IS: ', response);
console.log('SOLUTION 2 IS: ', response2);