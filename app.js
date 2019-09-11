function Osoba(imie) {
    this.imie = imie;
}

Osoba.prototype.przedstawSie = function() {
    console.log(`Nazywam sie ${this.imie}`);
}

var p = new Osoba("Marcin");

var temp = Object.create(Osoba.prototype);
Osoba.call(temp, "Mateusz");
var pp = temp;

pp.przedstawSie();
