// var ata = prompt('Введите слова');
// var newArr = [];
// for(var y = 0; y < ata.length; y++) {
//     for(var x = 0; x < ata.length - y; x++){
//         newArr.push(ata.slice(y, ata.length - x))
        
//     }
// }
// console.log(newArr);

var ata = prompt('Введите слова');
var newArr = [];
for(var y = 0; y < ata.length; y++) {
    for(var x = 0; x < ata.length - y; x++){
        newArr.push(ata.slice(y, ata.length - x))
    }
}
console.log(newArr);