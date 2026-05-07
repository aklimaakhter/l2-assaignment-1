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
console.log(reverse)
