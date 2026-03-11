import { describe, it, expect } from 'vitest';

describe('Product functionality', () => {
    it('should return the correct product of two numbers', () => {
        const product = (a, b) => a * b;
        expect(product(2, 3)).toBe(6);
    });
});