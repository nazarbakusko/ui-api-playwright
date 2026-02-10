import { describe, it, expect } from 'vitest';

describe('Function Tests', () => {
    it('should return the sum of numbers in an array', () => {
        // Dynamically require the function
        const { arraySum } = require('./functions.js');
        const numArr = [1, 2, 3, 5, 7, 9];
        expect(arraySum(numArr)).toBe(27);
    });

    it('should concatenate strings in an array', () => {
        const { arraySum } = require('./functions.js');
        const strArr = ["Hello", " ", "World", "!"];
        expect(arraySum(strArr)).toBe("Hello World!");
    });
});