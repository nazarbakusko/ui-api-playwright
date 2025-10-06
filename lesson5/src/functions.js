const numArr = [1, 2, 3, 5, 7, 9];
const strArr = ["Hello", " ", "World", "!"];

function arraySum(arr) {
    if (typeof arr[0] === "number") {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }

    if (typeof arr[0] === "string") {
        let result = "";
        for (let i = 0; i < arr.length; i++) {
            result = result + arr[i];
        }
        return result;
    }

    return null;
}

console.log("Sum:", arraySum(numArr));
console.log("Sum:", arraySum(strArr));
