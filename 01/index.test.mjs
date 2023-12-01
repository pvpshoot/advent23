import main, { getNumberFromRow } from "./index.mjs"
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs/promises';
import path from 'path'


test('getNumberFromRow', (t) => {
    assert.strictEqual(getNumberFromRow('11'), '11');
    assert.strictEqual(getNumberFromRow('a11v'), '11');
    assert.strictEqual(getNumberFromRow('a1v'), '11');
    assert.strictEqual(getNumberFromRow('two1nine'), '29');
});
test('main', async (t) => {
    const input = await fs.readFile(path.join('01','input.test.txt'), 'utf-8');
    const input2 = await fs.readFile(path.join('01','input.test.2.txt'), 'utf-8');
    const response = await main(input);
    const response2 = await main(input2);
    assert.strictEqual(response, 142);
    assert.strictEqual(response2, 281);
});
