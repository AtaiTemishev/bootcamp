for (var i = 1; i <= 100; i++) {
    if(i % 2 === 0 && i % 3 ===0) {
        console.log('fizzBuzz' , i)

    }else if(i % 2 === 0) {
        console.log('fizz' , i) 
    }else if(i % 3 === 0) {
        console.log('buzz', i)
    }else {
        console.log(i)
    }
}