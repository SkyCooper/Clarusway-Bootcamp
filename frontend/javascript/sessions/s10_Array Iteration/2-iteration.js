//* ======================================================
//*                   FOREACH METHOD

//todo, forEach() METODUNDA İNDİS KULLANIMI
// • forEach() metodu içerinde çağrılan ya da tanımlanan fonksiyon aslında 3 adet parametre  alabilmektedir

//? Array.map(function(şuankiDeğer , indis , dizi))
//? • şuankiDeğer : Seçilen dizi elemanının mevcut değerini göstermektedir Kullanımı ZORUNLUDUR
//? • İndis : Şu anki dizi elemanının sırasını (index) gösterir OPSİYONEL
//? • Dizi : Şu an ki elemanın ait olduğu dizi nesnesidir OPSİYONEL

//* NOT : Bu parametrelerin isimlerini kullanıcı belirler ancak sırası önemlidir;
//* 1. parametre değer, 2. si index, 3. sü ise dizidir
//* ======================================================

//?-------------- ÖRNEK -------------------
//?  Dizideki herbir fiyati konsola bastiriniz.

const fiyatlar = [100, 250, 50, 89];
fiyatlar.forEach((fiyat) => console.log(fiyat));

//?  Dizideki bütün fiyatları toplayıp konsola bastiriniz.

let sum = 0;
fiyatlar.forEach((f) => (sum += f));

//! NOT: forEach metodu void metottur.(Herhangi bir deger dondurmez)
console.log(fiyatlar.forEach((f) => (sum += f))); //!undefined --> VOID olduğu için return yok

console.log("Toplam : " + sum);

//?  Dizideki bütün fiyatların ara toplam değerlerini toplayıp konsola bastiriniz.
//?  Ayrıca herbir fiyata %10 zam yapınız.

let total = 0;
fiyatlar.forEach((fiyat, sayac, dizi) => {
  total += fiyat;
  console.log(`${sayac + 1}.iterasyon toplamı : ${total}`);
  dizi[sayac] = Math.trunc(fiyat * 1.1); //yuvarlama yapmak için
  //* burada orjinal dizi değerleri değişti.
});

console.log(fiyatlar);

//* ======================================================
//*                       MAP METHOD

//todo, MAP() METODUNDA İNDİS KULLANIMI
// • map() metodu forEach() 3 adet parametre alabilmektedir.
//? Array.map(function(şuankiDeğer , indis , dizi))

//? • şuankiDeğer : Seçilen dizi elemanının mevcut değerini göstermektedir Kullanımı ZORUNLUDUR
//? • İndis : Şu anki dizi elemanının sırasını (index) gösterir OPSİYONEL
//? • Dizi : Şu an ki elemanın ait olduğu dizi nesnesidir OPSİYONEL

//* NOT : Bu parametrelerin isimlerini kullanıcı belirler ancak sırası önemlidir;
//* 1. parametre değer, 2. si index, 3. sü ise dizidir.

//! map() metodu orijinal diziyi değiştirmez Yeni bir dizi oluşturarak döndürür, map() metodu,  güncellenmiş diziyi doğrudan bir değişkene atmaya izin vermektedir.
//* ======================================================

//?-------------- ÖRNEK -------------------
//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
let names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const newNames = names.map((name) => name.toUpperCase());
console.log(newNames); //* orjinal değişmeden başka bir değişkene atama yapıldı.

//?-------------- ÖRNEK -------------------
//? tlFiyatlar dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const euro = 18.23;
const dolar = 18.19;
const tlFiyatlar = [100, 150, 100, 50, 80];

const euroPrices = tlFiyatlar.map((tl) => Number((tl / euro).toPrecision(3)));
console.log(euroPrices);

// .toPrecision(3) --> toplamda 3 basamaklı         3.45   string
// .toFixed(3)     --> virgülden sonra 3 basamaklı  3.456  string

const dolarPrices = tlFiyatlar.map((tl) => (tl / euro).toFixed(3));
console.log(dolarPrices);

//?-------------- ÖRNEK -------------------
//? products dizisinin icerisindeki her urunu (Orjinal dizideki)
//? buyuk harf olarak degistirelim.
const products = [
  "Iphone12",
  "samsungS20",
  "lenovo",
  "macbook pro",
  "mac air",
  "Galaxy tablet",
  "macbook",
  "Iphone12",
  "mac air",
  "lenovo",
  "macbook pro",
  "samsungS20",
];

//! Orjinal diziyi degistidik. hepsi büyük harf oldu,
//todo, 3 parametre aldığından arr yani dizinin kendisi değişti.
products.map((p, i, arr) => (arr[i] = p.toUpperCase()));
console.log(products);

//* ======================================================
//*                 FILTER METHOD

//! Array.filter() metodu, bir fonksiyonu parametre olarak alır ve orijinal dizinin kopyasını bu fonksiyona göre filtreleyerek döndürür • Yani bir dizideki istediğimiz elemanların seçmek için kullanılır • filter() metodu orijinal diziyi değiştirmez Yeni bir dizi oluşturarak döndürür.
//* ======================================================

const maaslar = [5500, 8000, 6500, 9000, 10000, 15000, 25000];

//?-------------- ÖRNEK -------------------
//? Maasi 10000'den buyuk olanlari ayri bir diziye saklayalim

const bigThan = maaslar.filter((m) => m > 10000);
console.log(bigThan, maaslar);
//* orjinal dizi 7 elemanlı/ dönen dizi 2 elemanlı

const range = maaslar.filter((s) => s >= 6000 && s <= 10000);
console.log(range);

//?-------------- ÖRNEK -------------------
//? Maasi 9000'den az olanlara %10 zam yaparak bu degerleri
//? yeni diziye saklayalim.

const lessThan9000Increase = salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1));
console.log(lessThan9000Increase);
//todo, önce 9000den az olanlı filitreledik, daha sonra map ile değerlerini değiştirdik.

salaries
  .filter((s) => s < 9000)
  .map((s) => Math.trunc(s * 1.1))
  .forEach((s) => console.log(s));
//todo, önce 9000den az olanlı filitreledik, daha sonra map ile değerlerini değiştirdik, en son forEach ile teker teker yazdırdık. VOİD olduğu için hat burada kesilmiş oldu ve değişkene atamadan kullandık.

//* ======================================================
//*                CHAINING (PIPELINE)
//! PIPELINE (HAT)
//* Dizi iterasyon metotları ardı ardına kullanılabilir Böylelikle ardışık bir şekilde diziler işlenebilir. forEach void olduğu, itere edilemeyeceği için onun devamı olmaz. orada hat kesilir.
//* ======================================================

//* ======================================================
//*                 REDUCE METHOD

//? • Array.reduce() metodu, bir fonksiyonu parametre olarak alır ve orijinal diziyi bu fonksiyona göre işleyerek tek bir değer döndürür.
//? • Örneğin bir dizinin değerlerinin toplamını bulmak için reduce() metodu kullanılabilir.
//? • reduce() metodu orijinal diziyi değiştirmez Sadece bir değer döndürür.
//* ======================================================