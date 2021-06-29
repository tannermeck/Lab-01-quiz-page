// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

test('should return true for "yes" strings', assert => {
    const yesString = 'yes';
    const expected = true;
    const actual = isYes(yesString);
    assert.equal(actual, expected);
});
test('should return true for "y" strings', assert => {
    const yString = 'y';
    const expected = true;
    const actual = isYes(yString);
    assert.equal(actual, expected);
});
test('should return true for "YES" strings', assert => {
    const YESString = 'YES';
    const expected = true;
    const actual = isYes(YESString);
    assert.equal(actual, expected);
});
test('should return true for "yepp" strings', assert => {
    const yeppStrings = 'yepp';
    const expected = true;
    const actual = isYes(yeppStrings);
    assert.equal(actual, expected);
});
test('should return true for "yeah" strings', assert => {
    const yeahStrings = 'yeah';
    const expected = true;
    const actual = isYes(yeahStrings);
    assert.equal(actual, expected);
})
test('should return false for non yes-y string', assert => {
    const noString = 'no';
    const expected = false;
    const actual = isYes(noString);
    assert.equal(actual, expected);
});
