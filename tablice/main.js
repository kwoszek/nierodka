const pizze = [
  {
    nazwa: "Margharita",
    skladniki: ["ser", "sos pomidorowy"],
  },
  {
    nazwa: "Carbonara",
    skladniki: ["ser", "sos pomidorowy", "parmazan", "jajka", "bekon"],
  },
  {
    nazwa: "Funghi",
    skladniki: ["ser", "sos pomidorowy", "pieczarki", "oliwki"],
  },
  { nazwa: "Caprese", skladniki: ["ser", "plastry pomidora"] },
  {
    nazwa: "Capriciosa",
    skladniki: ["ser", "sos pomidorowy", "pieczarki", "szynka"],
  },
];

// Wyświetlanie nazw pizz
console.log("Nazwy pizz:");
for (let i = 0; i < pizze.length; i++) {
  console.log(pizze[i].nazwa);
}

// Dodawanie składnika do pizzy Margharita
const margharitaIndex = pizze.findIndex(
  (pizza) => pizza.nazwa === "Margharita"
);
if (margharitaIndex !== -1) {
  pizze[margharitaIndex].skladniki.push("oregano");
}

// Usuwanie składnika z pizzy Funghi
const funghiIndex = pizze.findIndex((pizza) => pizza.nazwa === "Funghi");
if (funghiIndex !== -1) {
  const skladniki = pizze[funghiIndex].skladniki;
  const oliwkiIndex = skladniki.findIndex((skladnik) => skladnik === "oliwki");
  if (oliwkiIndex !== -1) {
    skladniki.splice(oliwkiIndex, 1);
  }
}

// Dodawanie nowej pizzy
const nowaPizza = {
  nazwa: "Hawajska",
  skladniki: ["ser", "sos pomidorowy", "szynka", "ananas"],
};
pizze.push(nowaPizza);

// Edytowanie składników pizzy Carbonara
const carbonaraIndex = pizze.findIndex((pizza) => pizza.nazwa === "Carbonara");
if (carbonaraIndex !== -1) {
  pizze[carbonaraIndex].skladniki = [
    ...pizze[carbonaraIndex].skladniki,
    "cebula",
    "pieczarki",
  ];
}

// Wyświetlanie wszystkich składników
console.log("Składniki wszystkich pizz:");
for (let i = 0; i < pizze.length; i++) {
  console.log(pizze[i].skladniki);
}

// Usuwanie pizzy Caprese
const capreseIndex = pizze.findIndex((pizza) => pizza.nazwa === "Caprese");
if (capreseIndex !== -1) {
  pizze.splice(capreseIndex, 1);
}

// Wyświetlanie nazw pizz po usunięciu pizzy Caprese
console.log("Nazwy pizz po usunięciu pizzy Caprese:");
for (let i = 0; i < pizze.length; i++) {
  console.log(pizze[i].nazwa);
}
// Zmiana nazwy pizzy Carbonara na Carbonara Deluxe
const carbonaraIndex2 = pizze.findIndex((pizza) => pizza.nazwa === "Carbonara");
if (carbonaraIndex2 !== -1) {
  pizze[carbonaraIndex].nazwa = "Carbonara Deluxe";
}

// Wyświetlanie wszystkich składników w jednym ciągu
console.log("Składniki wszystkich pizz w jednym ciągu:");
for (let i = 0; i < pizze.length; i++) {
  console.log(pizze[i].skladniki.join(", "));
}

// Sprawdzenie czy pizza Hawajska zawiera składnik ananas
const hawajskaIndex = pizze.findIndex((pizza) => pizza.nazwa === "Hawajska");
if (hawajskaIndex !== -1) {
  const hawajskaSkladniki = pizze[hawajskaIndex].skladniki;
  const czyZawieraAnanas = hawajskaSkladniki.includes("ananas");
  console.log(
    `Czy pizza Hawajska zawiera składnik ananas? ${czyZawieraAnanas}`
  );
}

// Sprawdzenie ilości składników w pizzy Capriciosa
const capriciosaIndex = pizze.findIndex(
  (pizza) => pizza.nazwa === "Capriciosa"
);
if (capriciosaIndex !== -1) {
  const capriciosaSkladniki = pizze[capriciosaIndex].skladniki;
  const iloscSkladnikow = capriciosaSkladniki.length;
  console.log(`Ilość składników w pizzy Capriciosa: ${iloscSkladnikow}`);
}
