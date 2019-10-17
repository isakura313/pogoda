// от -30 до -5 -мороз
//от -5 до 15 - тепло
// от 15 до 50 - жара
'use strict'

let temperature = prompt('Температура за окном?');
let temp=+temperature;  //перевод в число из строки
let body = 

if(temp>= -30 && temp<=-5){
    alert('холодно!');
}else if(temp>= -5 && temp<=15){
    alert('тепло!');
} else if(temp>= 15 && temp<=50){
    alert('жара');
}
