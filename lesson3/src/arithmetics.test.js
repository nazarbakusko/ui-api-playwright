import { describe, it, expect } from 'vitest';

describe('Arithmetic Functions', () => {
    it('should add two numbers correctly', () => {
        expect(1 + 1).toBe(2);
    });

    it('should subtract two numbers correctly', () => {
        expect(2 - 1).toBe(1);
    });

    it('should multiply two numbers correctly', () => {
        expect(2 * 3).toBe(6);
    });

    it('should divide two numbers correctly', () => {
        expect(6 / 2).toBe(3);
    });
});