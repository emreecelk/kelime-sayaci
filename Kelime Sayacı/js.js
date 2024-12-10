const metin = prompt("Bir cümle girin:");

let kelimeler = [];
let kelime = '';

for (let karakter of metin) {
    karakter = karakter.toLowerCase();

    if (karakter === ' ') {

        if (kelime !== '') {
            kelimeler.push(kelime);
            kelime = '';
        }
    } else {
        kelime += karakter;
    }
}

if (kelime !== '') {
    kelimeler.push(kelime);
}

let kelimeSayilari = {};

for (let kelime of kelimeler) {
    if (kelimeSayilari[kelime]) {
        kelimeSayilari[kelime]++;
    } else {
        kelimeSayilari[kelime] = 1;
    }
}
console.log(kelimeSayilari);
