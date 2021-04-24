/*
 BUATLAH KODE FUNCTION DISINI
 SOAL 2
*/
function shoutOut(){
    return "Halo Function"; 
};
console.log(shoutOut());// Menampilkan "Halo Function!" di console

/*
 BUATLAH KODE FUNCTION DISINI
 SOAL 3
*/
let num1 = 5;
let num2 = 6;

function calculateMultiply(num1,num2){
    return num1 * num2;
};

console.log(calculateMultiply(num1, num2));

/*
 BUATLAH KODE FUNCTION DISINI
 SOAL 4
*/

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";
var fullSentence = processSentence(name, age, address, hobby);

function processSentence(name, age, address, hobby){
    return 'Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby;
}

console.log(fullSentence);
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming