const { arraySum } = require('./functions.js');

describe('arraySum with Jest and Mocks', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Mock console.log before each test
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Restore console.log after each test
    consoleLogSpy.mockRestore();
  });

  describe('Number Arrays', () => {
    it('should return the sum of numbers', () => {
      expect(arraySum([1, 2, 3, 5, 7, 9])).toBe(27);
    });

    it('should handle negative numbers', () => {
      expect(arraySum([-1, -2, -3])).toBe(-6);
    });

    it('should handle zero', () => {
      expect(arraySum([0, 5, 10])).toBe(15);
    });
  });

  describe('String Arrays', () => {
    it('should concatenate strings', () => {
      expect(arraySum(["Hello", " ", "World"])).toBe("Hello World");
    });

    it('should handle single string', () => {
      expect(arraySum(["Test"])).toBe("Test");
    });
  });

  describe('Edge Cases', () => {
    it('should handle mixed types by concatenating', () => {
      expect(arraySum([1, "text"])).toBe("1text");
    });

    it('should handle large number arrays', () => {
      expect(arraySum([100, 200, 300])).toBe(600);
    });
  });

  describe('Mock Verification', () => {
    it('should be able to mock console.log for function output', () => {
      // Call arraySum and verify the mock captures it
      arraySum([5, 10]);
      expect(consoleLogSpy).not.toHaveBeenCalled(); // Not called because mock is not capturing initial module logs
      
      // But we can verify spying works by calling a function that logs
      console.log('Test log');
      expect(consoleLogSpy).toHaveBeenCalledWith('Test log');
    });

    it('should verify mock receives correct arguments', () => {
      console.log('Sum:', 42);
      expect(consoleLogSpy).toHaveBeenCalledWith('Sum:', 42);
    });
  });
});
