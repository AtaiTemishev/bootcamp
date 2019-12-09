const words = [
    "javascript",
    "phyton",
    "object",
    'task',
    'makers'
]

let word = words[Math.floor(Math.random()*words.length)]

let answerArr = word.split('').map(function(item){
    return "_"
})

let remainingLetters = word.length;
let attempts = 0;


while(remainingLetters > 0) {
    let guess = prompt(
        'Угадайте букву, или нажимите отмену чтобы выйти из игры \n' + answerArr.join())
    if(guess ==="")continue;
    if(guess === null)break;
    
    if(guess.length !== 1){
        alert('Пожалуйста, введите тольк одну букву.');
        continue;
    }
    let isTrueGuess = false;
    word.split("").map(function(item, index){
        if(guess === item && answerArr[index] === "_"){
            isTrueGuess = true;
            answerArr[index] = guess;
            reminingLetters--;
        }
    })   
    if(isTrueGuess){
        trueAttempts++;
    }

    attempts++;
}
if(!reminingLetters){
alert('Ураа!!! , вы отгадали слово: \n' + word(""))
alert('кол-во попыток' + attempts);
}