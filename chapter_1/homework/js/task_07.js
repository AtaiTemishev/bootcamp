var drinks = prompt('Введите напиток');

switch(drinks) {
    case 'Пиво':
    case 'Водка': alert('ВРЕДНО!');
    break;
    case 'Молоко': alert('Полездно');
    break;
    default: alert('Первый раз слышу такой напиток');

}
