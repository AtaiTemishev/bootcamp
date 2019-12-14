// function sayHallo() {
//     let name = 'Jack';
//     console.log('Hello ' + name)
//     function sayBye(){
//         console.log('Bye ' + name)
//     }
//     sayBye();
// }

// // console.log(name)

// sayHallo();

// function sayHello(){
//     let name = 'Jack';
//     return function(){
//         name = 'Hello' + name;
//         return name
//     }
// }

// let helloFunc = sayHello();

// function sumFunc(a) {
// return function(b) {
//     return a + b
//     }
// }

// const sum = sumFunc(5);

// console.log(sum(2));
// console.log(sum(5))

// function testReturn(a, b){
//     let sum = a + b;
    
// }

// testReturn(2,5);

// function sumFanc(a) {
//     return function(b) {
//         return a + b
//     }
// }

// let sum =sumFanc(3)(5);

// console.log(sum);

// let arrNum = [1,2,3,4,5];

// function checkArr(arr, i = 0) {
//     if(i < arr.length){
//         console.log(arr[i])
//         i++
//         return checkArr(arr, i)

//     }
// }

// checkArr(arrNum);

const countryArr = ['Russia', 'Kyrgyzstan','France', 'USA'];
const countryArr2 = ['Russia', 'Kyrgyzstan','France', 'USA'];

function longAndShort(countryList) {
    countryList.sort(function(a,b){
        return a.length - b.length
    })
    let leng = countryList.length

    return countryList[0] + ' ' + countryList[leng - 1]
    }

    const result1 = longAndShort(countryArr);
    const result2 = longAndShort(countryArr2);
    console.log(result1, result2);

