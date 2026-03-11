import { describe, it, expect } from 'vitest';

describe('Array functions', () => {
    it('should return the correct length of an array', () => {
        const arr = [1, 2, 3];
        expect(arr.length).toBe(3);
    });

    it('should return the first element of an array', () => {
        const arr = [1, 2, 3];
        expect(arr[0]).toBe(1);
    });

    it('should return the last element of an array', () => {
        const arr = [1, 2, 3];
        expect(arr[arr.length - 1]).toBe(3);
    });
});