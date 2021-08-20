class Ksiazka {
  constructor(tytul, autor, przeczytana) {
    this.tytul = tytul;
    this.autor = autor;
    this.przeczytana = przeczytana;
  }

  opiszKsiazke() {
    if (this.przeczytana) {
      return 'Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i została przeczytana.';
    } else {
      return 'Książka ma tytuł ' + this.tytul + ', autorem jest ' + this.autor + ' i nie została przeczytana.';
    }
  }
}


let ksiazka1 = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', true);
ksiazka1.opiszKsiazke();
console.log(ksiazka1);

let ksiazka2 = new Ksiazka('Maladie', 'Andrzej Sapkowski', false);
ksiazka2.opiszKsiazke();
console.log(ksiazka2);

let ksiazka3 = new Ksiazka('Ostatnie zyczenie', 'Andrzej Sapkowski', false);
ksiazka3.opiszKsiazke()
console.log(ksiazka3);

let tablica = [];
tablica.push(ksiazka1, ksiazka2, ksiazka3);
console.log(tablica);


const iloscPrzeczytanych = (tab) => {
  let numberTrue = 0;
  for (let i = 0; i < tab.length; i++) {
    if (tab[i].przeczytana == true) {
      numberTrue++;
    }
    console.log(tab[i].opiszKsiazke());
  }
  return numberTrue;
}
console.log('Przeczytane ksiazki: ' + (iloscPrzeczytanych(tablica)));