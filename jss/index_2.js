// Oson Topsiriqlar 1
let talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };
console.log("Talabalar soni:", Object.keys(talabalar).length); // Talabalar soni: 3

// Oson Topsiriqlar 2
let mahsulotlar2 = { olma: 3000, nok: 4000, banan: 2000 };
let yigindi = Object.values(mahsulotlar2).reduce((a, b) => a + b, 0);
console.log("Narxlar yig'indisi:", yigindi); // Narxlar yig'indisi: 9000

// Oson Topsiriqlar 3
let jadval = { dushanba: "Matematika", seshanba: "Fizika", chorshanba: "Informatika" };
console.log(Object.keys(jadval)); // ["dushanba", "seshanba", "chorshanba"]

// Oson Topsiriqlar 4
let shaxs4 = { ism: "Sanjar", yosh: 25 };
Object.freeze(shaxs4);
shaxs4.yosh = 30; // o'zgarmaydi
console.log(shaxs4.yosh); // 25

// Oson Topsiriqlar 5
let vazifalar = { uy_ishi: true, dastur_yaratish: false, sport: true };
let tugallangan = Object.values(vazifalar).filter(v => v).length;
let tugallanmagan = Object.values(vazifalar).filter(v => !v).length;
console.log("Tugatilgan:", tugallangan, "Tugatilmagan:", tugallanmagan); // Tugatilgan: 2 Tugatilmagan: 1

// Oʻrtacha Topsiriqlar 6
let mahsulotlar6 = { olma: 3000, nok: 4000, banan: 2000 };
let qimmatlar = Object.entries(mahsulotlar6)
  .filter(([_, narx]) => narx > 3000)
  .reduce((obj, [nom, narx]) => ({ ...obj, [nom]: narx }), {});
console.log(qimmatlar); // { nok: 4000 }

// Oʻrtacha Topsiriqlar 7
let sinf7 = { Ahmad: 15, Murod: -3, Javohir: 17 };
let tozalangan = Object.entries(sinf7)
  .filter(([_, yosh]) => yosh >= 0)
  .reduce((obj, [ism, yosh]) => ({ ...obj, [ism]: yosh }), {});
console.log(tozalangan); // { Ahmad: 15, Javohir: 17 }

// Oʻrtacha Topsiriqlar 8
let bankHisob = { balans: 500000 };
Object.defineProperty(bankHisob, 'pinCode', {
  value: 1234,
  writable: false,
  enumerable: true
});
console.log(bankHisob.pinCode); // 1234
bankHisob.pinCode = 9999; // o'zgarmaydi

// Oʻrtacha Topsiriqlar 9
let shaxs9 = { ism: "Laylo", familiya: "Islomova" };
shaxs9.toliqIsm = function() {
  return this.ism + " " + this.familiya;
};
console.log(shaxs9.toliqIsm()); // Laylo Islomova

// Oʻrtacha Topsiriqlar 10
let qiymatlar = [10, 20, 30];
function yigindiHesabla(a, b, c) {
  return a + b + c;
}
let natija = yigindiHesabla.call(null, ...qiymatlar);
console.log("Yig'indi:", natija); // Yig'indi: 60

// Oʻrtacha Topsiriqlar 11
let mahsulotlar11 = { olma: 3000, nok: 4000 };
function narxniOlish(nom) {
  return this[nom];
}
let olmaNarxi = narxniOlish.bind(mahsulotlar11, 'olma');
console.log("Mahsulot narxi:", olmaNarxi()); // Mahsulot narxi: 3000

// Oʻrtacha Topsiriqlar 12
let narxlar = [500, 1000, 1500];
function yigindiHesabla12() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}
let natija12 = yigindiHesabla12.apply(null, narxlar);
console.log("Yigʻindi:", natija12); // Yigʻindi: 3000

// Oʻrtacha Topsiriqlar 13
let savdo = { olma: 100, nok: 150, banan: 80 };
savdo.foyda = function() {
  return Object.values(this).reduce((a, b) => a + b, 0);
};
console.log("Foyda:", savdo.foyda()); // Foyda: 330

// Oʻrtacha Topsiriqlar 14
let sinf14 = { oʻquvchilar: 25, oʻqituvchi: 1 };
Object.seal(sinf14);
sinf14.oʻquvchilar = 30; // ruxsat
// delete sinf14.oʻqituvchi; // xato
// sinf14.xona = 101; // yangi qo'shib bo'lmaydi
console.log(sinf14.oʻquvchilar); // 30

// Oʻrtacha Topsiriqlar 15
let shaxs15 = { ism: "Olim", yosh: 25 };
shaxs15.salomlash = function() {
  console.log(`Salom, men ${this.ism}man!`);
};
shaxs15.salomlash(); // Salom, men Olimman!

// Qiyin Topsiriqlar 16
function Odam(ism) {
  this.ism = ism;
}
Odam.prototype.gapir = function() {
  console.log(`${this.ism} gapiryapti`);
};
let odam = new Odam("Ali");
adam.gapir(); // Ali gapiryapti

// Qiyin Topsiriqlar 17
let katalog = {
  texnika: { kompyuter: 5000, printer: 3000 },
  oziq_ovqat: { non: 1000, sut: 2000 }
};
let umumiy = {};
for (let bolim in katalog) {
  umumiy[bolim] = Object.values(katalog[bolim]).reduce((a, b) => a + b, 0);
}
console.log("Texnika:", umumiy.texnika, "Oziq-ovqat:", umumiy.oziq_ovqat);
// Texnika: 8000 Oziq-ovqat: 3000

// Qiyin Topsiriqlar 19
let talabalar19 = { Ahmad: {}, Laylo: {} };
Object.keys(talabalar19).forEach(ism => {
  Object.defineProperty(talabalar19[ism], 'baholar', {
    value: [],
    writable: true,
    enumerable: true
  });
});
console.log(talabalar19.Ahmad.baholar); // []

// Qiyin Topsiriqlar 20
Array.prototype.ortacha = function() {
  if (this.length === 0) return 0;
  return this.reduce((a, b) => a + b, 0) / this.length;
};
let ballar = [90, 80, 70];
console.log("O'rtacha:", ballar.ortacha()); // O'rtacha: 80