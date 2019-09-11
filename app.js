function Pracownik(imie) {
    this.imie = imie;
}

Pracownik.prototype.przedstawSie = function() {
    console.log(`Nazywam sie ${this.imie}`);
}

var p = new Pracownik("Marcin");

var temp = Object.create(Pracownik.prototype);
Pracownik.call(temp, "Mateusz");
var pp = temp;

pp.przedstawSie();
