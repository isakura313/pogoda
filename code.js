// от -30 до -5 -мороз
//от -5 до 15 - тепло
// от 15 до 50 - жара
'use strict'

let temperature = prompt('Температура за окном?');
let temp=+temperature;  //перевод в число из строки
let body = document.querySelector('body');

if(temp>= -30 && temp<=-5){
    alert('холодно!');

    body.classList.add('moroz')
}else if(temp>= -5 && temp<=15){
    alert('тепло!');

    body.classList.add('teplo')
} else if(temp>= 15 && temp<=50){
    alert('жара');
    
    body.classList.add('hot')
}
