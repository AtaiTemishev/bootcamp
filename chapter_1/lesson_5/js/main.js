// var secondName = 'secondName';

// let name = 'someName';

// const surName = 'surName';

// function example() {
//     var firstName = 'Atai'
//     function example2() {
//     function oneBigFuunc() {
//         var name = 'fais';
//         var name = 'emir';
//         console.log(name);   
//     }

//  oneBigFuunc();


// for(let i = 0; i < 3; i++) {

// }

// console.log(i);



// var x = 10;
// let x = 10;

// console.log(x);

// let emir = 'value';

// console.log(window.emir)

// const obj = {
//     name: 'Fais',
//     lastName: 'Igari'
// };

// obj.name = 'pipi'
// obj.lastName = 'sasa';
// console.log(obj);

// const arr = [1,2,3];

// arr[0] = 'hello';
// arr.pop();

// console.log(arr);

// let name = 'SomeName';
// let secondName = name;

// secondName = 'Emir';

// console.log(name);
// console.log(secondName)

// let obj = {
//     name: 'SomeName'
// }

// let obj2 = obj;

// obj2.name = 'emir'

// console.log(obj.name)
// console.log(obj2.name)


// const obj = {
//     name: 'Fais',
//     group: 'JS'
// }

// const obj2 = {...obj};

// obj2.group = 'Pyton';

// console.log(obj);
// console.log(obj2);

// const arr = [1,2,3,4,5];
// const arr2 = [...arr];

// arr2[0] = 'NEW';

// console.log(arr, arr2)

// const obj = {
//     name: 'someName',
//     lastName: 'lastName'
// }

// const obj2 = {
//     ...obj,
//     age:20,

// }
// console.log(obj2)

const people = ['jack','john','police','bill','paul']
const hata = [];

for(let i = 0; i < people.length; i++) {
    if(people[i] === 'john') continue;
    if(people[i] === 'police') break;
    hata.push(people[i]);
}
console.log(hata);