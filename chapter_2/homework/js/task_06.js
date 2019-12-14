function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}


console.log(factorial(5))
console.log(factorial(6))


// function fact(n){
//     if(n != 1){
//         return n * factorial(n - 1)
//     }else{
//         return 1
//     }
// }
/*

let answer1 = true ? "yes" : "no"
answer === "yes"


let answer2 = false ? "yes" : "no"
answer2 === "no"


5 != 1 ----- true

5 * factorial(5-1)
    4 != 1 --------true
    4 * factorial(4-1)
        3 != 1 ------- true
        3 * factorial(3-1)
            2 != 1 ------- true
            2 * factorial(2-1)
                1 != 1 ------- false
                1

=120

*/