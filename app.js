function add(a, b) {
    return a + b;
}

var n1 = 10, n2 = 20;
console.log(n1, n2, add(n1, n2));

var n = 1.5;
var b = true;
var s = "hello " + 'world';

var nu = null;
var u = undefined;

//wypisanie wartosci zmiennej
console.log(n);
console.log(n, b, s);

//operator typeof zwraca nazwe typu
console.log(typeof n, typeof b, typeof s, typeof u);
console.log(typeof nu);