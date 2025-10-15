const numArr: number[] = [1, 2, 3, 5, 7, 9];
const strArr: string[] = ['Hello', ' ', 'World', '!'];

function arraySum(arr: number[] | string[]): number | string {

    if (typeof arr[0] === 'number') {
        let sum = 0;
        for (const num of arr) {
            sum += num as number;
        }
        return sum;
    } else {
        let result = '';
        for (const str of arr) {
            result += str as string;
        }
        return result;
    }
}

console.log('Sum:', arraySum(numArr));
console.log('Sum:', arraySum(strArr));
