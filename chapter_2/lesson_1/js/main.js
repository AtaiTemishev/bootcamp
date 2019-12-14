// function exampleFunc() {
//     console.log('Hello World');
// }

// for(let i =0; i < 3; i++) {
// exampleFunc();
// }

// function multiplay(a,b) {
//     let result = a * b;
//     console.log(result);
// }

// multiplay(2,5);
// multiplay(6,6);
// multiplay(3,3);

// radiusToSquare(3)

// Function declaration

// function radiusToSquare(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга' + result)

// }

// radiusToSquare(5);
// radiusToSquare(10);

// radiusToSquare(5)

// const radiusToSquare = function(r) {
//     let result = Math.PI * (r * r);
//     console.log('Площадь круга' + result);
// }

// radiusToSquare(3);

// Self-Invokink func

// (function(){
//     let hello = 'Hello World';
//     console.log('Hello World')
// })()

// let sguare = null;

const radiusToSquare = function(r) {
    let result = Math.PI * (r * r);
    return result
    // console.log('Hello World'); Не сработает после return
}

// radiusToSquare(3)
// radiusToSquare(5)

// let square1 = radiusToSquare(3);
// let square2 = radiusToSquare(5);


// console.log(square1);
// console.log(square2);

// const inputAge = +prompt('Введите возраст');

// const chackAge = function(age) {
//     return age >= 18
// }

// if(chackAge(inputAge)) {
//     alert('Доступ разрешен')
// }else {
//     alert('Доступ запрещен')
// }

// Arrow Function

// const exampleFunc = () => {
    // console.log('hello world');
// }
