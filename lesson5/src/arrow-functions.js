const numArr = [1, 2, 3, 5, 7, 9];
const strArr = ["Hello", " ", "World", "!"];

const arraySum = (arr) => {
    if (typeof arr[0] === "number") {
        return arr.reduce((acc, element) => acc + element, 0);
    }

    if (typeof arr[0] === "string") {
        return arr.reduce((acc, element) => acc + element, "");
    }

    return null;
};

console.log("Sum:", arraySum(numArr));
console.log("Sum:", arraySum(strArr));
