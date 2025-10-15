const numArray: number[] = [1, 2, 3, 5, 7, 9];
const strArray: string[] = ['Hello', ' ', 'World', '!'];

const arrSum = (arr: number[] | string[]): number | string => {
    if (typeof arr[0] === 'number') {
        return (arr as number[]).reduce((acc, element) => acc + element, 0);
    }

    if (typeof arr[0] === 'string') {
        return (arr as string[]).reduce((acc, element) => acc + element, '');
    }

    throw new Error('Invalid array type');

};

console.log('Sum:', arrSum(numArray));
console.log('Sum:', arrSum(strArray));
