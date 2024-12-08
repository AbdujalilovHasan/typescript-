// #1

/* function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        const exponent = (i % 2 === 1) ? 1 : 2;
        sum += Math.pow(i, exponent);
    }

    return sum;
}

let n = 5;
console.log(getSum(n)); */




// ----------------------------

// #2

/* let arr = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];

function getLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord(arr)); */




// ----------------------------

// #3

/* let arr = [2, 5, 7, 10, 0, 18, 15];
let n = 5;

function getDividers(arr, n) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % n === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getDividers(arr, n)); */




// ----------------------------

// #4

/* let str = "Abdulaziz Programmer Is FullStack Developer";

function checkWordCapitalize(str: string): boolean {
    return str.split(' ').every(word => word[0] === word[0].toUpperCase());
}

console.log(checkWordCapitalize(str)); */




// ----------------------------

// #5

/* let str = "Abdulaziz Programmer";

function getCharCountObj(str: string): Record<string, number> {
    return str.split('').reduce((countObj, symbol) => {
        if (countObj[symbol]) {
            countObj[symbol]++;
        } else {
            countObj[symbol] = 1;
        }
        return countObj;
    }, {} as Record<string, number>);
}

console.log(getCharCountObj(str)); */




// ----------------------------

// #6

let obj = { a: 1, b: 2, c: 3 };

function changeObjToString(obj: Record<string, number>): string {
    let result = '';
    for (let key in obj) {
        result += key + obj[key];
    }
    return result;
}

console.log(changeObjToString(obj));




// ----------------------------

// #7

/* function deleteProducts(...ids: number[]): object[] {
    return products.filter(product => !ids.includes(product.id));
}

const products = [
  { id: 1, name: 'Bike', price: 100 },
  { id: 2, name: 'TV', price: 400 },
  { id: 3, name: 'Album', price: 800 },
  { id: 4, name: 'Book', price: 600 },
  { id: 5, name: 'Phone', price: 500 },
  { id: 6, name: 'Computer', price: 1000 },
  { id: 7, name: 'Skate', price: 300 },
  { id: 8, name: 'Keyboard', price: 200 },
  { id: 9, name: 'Bottle', price: 700 },
];

const updatedProducts = deleteProducts(4, 6, 9);

console.log(updatedProducts); */




// ----------------------------

// #8

/* function increaseProductPrice(
    products: { id: number; name: string; price: number }[],
    id: number,
    n: number
): { id: number; name: string; price: number }[] {
    return products.map(product => {
        if (product.id === id) {
            return { ...product, price: product.price + (product.price * n) / 100 };
        }
        return product;
    });
}

const products = [
    { id: 1, name: 'Bike', price: 100 },
    { id: 2, name: 'TV', price: 400 },
    { id: 3, name: 'Album', price: 800 },
    { id: 4, name: 'Book', price: 600 },
    { id: 5, name: 'Phone', price: 500 },
    { id: 6, name: 'Computer', price: 1000 },
    { id: 7, name: 'Skate', price: 300 },
    { id: 8, name: 'Keyboard', price: 200 },
    { id: 9, name: 'Bottle', price: 700 },
];

const updatedProducts = increaseProductPrice(products, 6, 20);

console.log(updatedProducts); */




// ----------------------------

// #9

/* let str = "Abdulaziz Programmer";
let char = "a";

interface String {
    count(char: string): number;
}

String.prototype.count = function (char: string): number {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === char) {
            count++;
        }
    }
    return count;
};

console.log(str.count(char)); */




// ----------------------------

// #10

/* class Employee {
    firstName: string;
    lastName: string;
    workPlace: string;
    salary: number;
    percent: number;
    isFullTime: boolean;

    constructor(
        firstName: string,
        lastName: string,
        workPlace: string,
        salary: number,
        percent: number,
        isFullTime: boolean
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.workPlace = workPlace;
        this.salary = salary;
        this.percent = percent;
        this.isFullTime = isFullTime;
    }

    getInfo(): string {
        const updatedSalary = this.salary + (this.salary * this.percent) / 100;
        const workStatus = this.isFullTime ? "full-time" : "part-time";
        return `${this.firstName} ${this.lastName} ${this.workPlace}da ${updatedSalary}$ oylik evaziga ${workStatus} ishlaydi.`;
    }
}

let emp1 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 10000, 20, false);
let emp2 = new Employee("Abdulaziz", "Programmer", "Najot ta'lim", 5000, 40, true);

console.log(emp1.getInfo());
console.log(emp2.getInfo()); */