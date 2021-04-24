function processSentence(){
    return "Nama saya "   + nama +','+"Umur saya " + age+ " Tahun, " +"alamat saya di " + address +"," + " dan saya punya hobby yaitu "+ hobby ;
}

let nama = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

var fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); 


