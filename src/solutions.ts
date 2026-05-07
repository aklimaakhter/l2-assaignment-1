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
// console.log(result)



// Problem-5
// Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

// // Sample Input:
// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

// // Sample Output:
// {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024,
//   isRead: true
// }


interface Book {
    title: string,
    author: string,
    publishedYear: number
}

const toggleReadStatus = (book: Book) => {
    return {
        ...book, isRead: true
    }
}

const myBook: Book = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024
}


const newBook=(toggleReadStatus(myBook))
// console.log(newBook)