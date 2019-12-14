function arr(str, letter)
{
    var letter_count = 0;
    for (var i = 0; i < str.length; i++)
{

if (str.charAt(i) == letter)
{

letter_count += 1;
}
}
return letter_count;
}
console.log(arr('atai', 'a'))