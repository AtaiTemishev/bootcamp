var arr = [1,2,3,0,9,0,7,0,0,5,4,0,];
var nulls = arr.filter(function(item){
    return item === 0;

})
var num = arr.filter(function(item){
    return item !==0;

})

console.log(num.concat(nulls))
