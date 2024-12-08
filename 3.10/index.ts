// #1

/* function getSum(n: number): number {
    let a = 1;
    let b = 1;

    for (let i = 1; i <= n; i++) {
        a *= (2 * i - 1);
        b *= (2 * i);
    }

    return a + b;
}

let n = 3;
console.log(getSum(n)); */




// ----------------------------


// #2


/* let arr = [1589, 31851, 512, 180975, 78];

function getHighestNumberOfDigits(arr: number[]): number {
    return arr.reduce((max, num) => num.toString().length > max.toString().length ? num : max);
}

console.log(getHighestNumberOfDigits(arr)); */




// ----------------------------

// #3

/* let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];

function getStringArr(arr: any[]): string[] {
    return arr.filter(item => typeof item === 'string');
}


console.log(getStringArr(arr)); */




// ----------------------------

// #4

/* let str = "Hello! How are you? I'm doing great. What's new?";

function getPunctuationNumber(str) {
    const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (punctuationSigns.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(getPunctuationNumber(str)); */





// ----------------------------

// #5

/* const str = "Abdulaziz Programmer";

function switchLetters(str: string): string {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase(); 
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}

console.log(switchLetters(str)); */




// ----------------------------

// #6

/* const obj = { a: 1, b: 2, c: 3 };

function changeObjToArr(obj: Record<string, any>): string[] {
    const result: string[] = [];
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    
    for (let i = 0; i < keys.length; i++) {
        result.push(keys[i] + values[i]);
    }
    
    return result;
}

console.log(changeObjToArr(obj)); */




// ----------------------------

// #7

/* let students = [
    { name: "Jurabek", isGrant: false },
    { name: "Elbek", isGrant: true },
    { name: "Shamshod", isGrant: false },
    { name: "Kamola", isGrant: false },
    { name: "Gulnoza", isGrant: true },
    { name: "Savlatbek", isGrant: false }
];

function seperateStudents(students: { name: string; isGrant: boolean }[]) {
    const result = {
        grant: [] as string[],
        contract: [] as string[]
    };

    students.forEach(student => {
        if (student.isGrant) {
            result.grant.push(student.name);
        } else {
            result.contract.push(student.name);
        }
    });

    return result;
}


console.log(seperateStudents(students)); */




// ----------------------------

// #8

/* const books = [
    { name: "The Great Gatsby", pages: 180, isReadFinished: true },
    { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
    { name: "Atom habits", pages: 328, isReadFinished: true },
    { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
    { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
    { name: "The Hobbit", pages: 310, isReadFinished: false },
    { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
    { name: "Harry Potter", pages: 320, isReadFinished: true },
    { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
    { name: "To the Lighthouse", pages: 209, isReadFinished: true }
  ];

function getTotalPages(books: { name: string; pages: number; isReadFinished: boolean }[]): number {
    return books
        .filter(book => book.isReadFinished)
        .reduce((total, book) => total + book.pages, 0);
}

console.log(getTotalPages(books)); */




// ----------------------------

// #9

/* let obj = { a: 1, b: 2, c: 3 };

Object.prototype.keys = function (): string[] {
    let keysArray: string[] = [];

    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            keysArray.push(key);
        }
    }

    return keysArray;
};

console.log(obj.keys()); */




// ----------------------------

// #10

/* let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);

function Student(firstName: string, lastName: string, university: string, course: number, totalYears: number, isGrant: boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.university = university;
    this.course = course;
    this.totalYears = totalYears;
    this.isGrant = isGrant;
}

Student.prototype.getInfo = function() {
    const grantStatus = this.isGrant ? "grant asosida" : "kontrakt asosida";
    const yearsLeft = this.totalYears - this.course;
    return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus} o'qiydi. ${yearsLeft} yildan keyin universitetidan qutuladi.`;
};

console.log(student.getInfo()); */