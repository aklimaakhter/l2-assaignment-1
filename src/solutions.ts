//  Problem-1

const filterEvenNumbers = (numbersArray: number[]):number[] => {
    return numbersArray.filter(element => element % 2 === 0);
}

const output=(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// console.log(output)

// Problem-2
const reverseString = (text: string): string => {
    return text.split("").reverse().join("");
}

const reverse=(reverseString("typescript"));
// console.log(reverse)



// Problem-3
// Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

// Sample Input 1:
// checkType("Hello");

// Sample Output 1:
// "String";

// Sample Input 2:
// checkType(42);

// Sample Output 2:
// "Number";

type StringNumber=string|number;

const checkType=(stringNumber:StringNumber)=>{
    if(typeof stringNumber==="number"){
        return "Number"
    }else if(typeof stringNumber==="string"){
        return "String"
    }
}
console.log(checkType('jg'))