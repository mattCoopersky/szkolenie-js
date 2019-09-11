var o = { name: "Adam", age : 30 };

console.log(o.name, o["age"]);

//odczytywanie wartosci istniejacej wlasciwosci lub dodanie nowej
o["age"] = 25;
o.address = "Kraków";

console.log(o);

//sprawdzenie czy wlasciwosc istnieje
console.log("name" in o);

//usunięcie istniejącej wartości
console.log(delete o.name);

console.log(o);