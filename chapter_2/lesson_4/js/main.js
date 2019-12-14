// let firstName = 'Jack';

// let resukt = 'Hello ' + firstName;
// let result 

// let a = 5;
// let b = 10;

// let result = ''

// function multiply(a,b) {
//     return a * b
// }

// let result =`2 * 5 = ${multiply(2,5)}`;

// console.log(result);

// let str = 'Hello my name is \*Jack\* My profession is Developer';

// console.log(str)

// let str = 'Name: Fais, Lastname: Iragi';
// let newArr = [];

// for(let i = 0; i < str.length; i++) {
//     if(str[i] !== 'a') newArr.push(str[i])
//     else newArr.push('*')
// }
// let newStr = newArr.join('')

// console.log(newStr)

// console.log(str.replace(/a/g, '*'))

// let str = prompt('Введите номер телефона')
// let pattern = /^\+?\d+$/gi;

// console.log(pattern.test(str));
// console.log(str.replase(pattern, '*'));
// if(!pattern.test(str)) {
//     alert('Все верно')
// }else {
//     alert('Вводите только число')
// }

//  let str = prompt('Введите');

//  let pattern = new RegExp('a',"tri");
// console.log(str.replace(pattern, '*'))
// console.log(pattern.test(s))
// console.log(str.match(pattern).length)
// console.log(pattern.test(str))


let reg = /\d{2}\.\d{2}\.\d{4}/gi

let date = 'я родился 19.09.01'
console.log(date.match(reg))