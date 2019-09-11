var s = 'JavaScript';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substr(4, 5));

var a = new String('JavaScript');
console.log(a);

//wbudowane obiekty, które nie są typami prymitywnymi tworzymy operatorem 'new'
var d = new Date(2001, 0, 1);
var e = new Error('invalid argument');
var r = new RegExp("/s");

console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.toDateString());