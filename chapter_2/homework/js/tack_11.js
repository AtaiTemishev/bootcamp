let str = prompt('Введите emial адрес')

function checkEmail(str) {
    let pattern = /^[a-z0-9]+\@[a-z]+\.[a-z]+$/
    return pattern.test(str)
}
(checkEmail(str))
alert(checkEmail(str))