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

function calculateMultiply(num1,num2){
    return num1 * num2;
};

let num1 = 5;
let num2 = 6;

console.log(calculateMultiply(num1, num2));

/*
 BUATLAH KODE FUNCTION DISINI
 SOAL 4
*/

function processSentence(name, age, address, hobby){
    var sentence = "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby;
    return sentence;
}
    var fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogjakarta", "gaming");

console.log(fullSentence);
// Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming