let country = ['Austria', 'Germany', 'France', 'Italy', 'Kyrgyzstan', 'USA']; 

function long(country) {
country.sort(function(a, b){
    return a.length - b.length
  })
  let leng = country.length 

  return country[0] + ' ' + country[leng - 1]
}

let result = long(country);
console.log(result);


