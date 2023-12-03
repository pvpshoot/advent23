import main, { parseGame } from "./index.mjs"
import test from 'node:test';
import assert from 'node:assert';
import fs from 'fs/promises';
import path from 'path'


test('parseGame', (t) => {
    assert.equal(JSON.stringify(parseGame('3 blue, 4 red')), JSON.stringify([{"red":4,"green":0,"blue":3}]));

});
test('main', async (t) => {
    const input = await fs.readFile(path.join('02','input.test.txt'), 'utf-8');

    const result = await main(input);
    assert.equal(result, 8)
});
