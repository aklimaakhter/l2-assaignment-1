//  Problem-1

const filterEvenNumbers = (numbersArray: number[]): number[] => {
    return numbersArray.filter(element => element % 2 === 0);
}

const output = (filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(output)

// Problem-2
const reverseString = (text: string): string => {
    return text.split("").reverse().join("");
}

const reverse = (reverseString("typescript"));
// console.log(reverse)



// Problem-3
type StringNumber = string | number;

const checkType = (stringNumber: StringNumber) => {
    if (typeof stringNumber === "number") {
        return "Number"
    } else if (typeof stringNumber === "string") {
        return "String"
    }
}
const result1 = checkType(22)
// console.log(result1)
const result2 = checkType("Hello")
// console.log(result2)


// Problem-4
const getProperty = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

const user = {
    id: 1,
    name: "John Doe",
    age: 21
};
const result = getProperty(user, 'name')
console.log(result)


