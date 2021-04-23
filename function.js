// Tugas 2

function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

// Tugas 3

function calculateMultiply(num1, num2) {
    return num1 * num2 ;
};

let num1 = 5;
let num2 = 6;

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


// Tugas 4

function processSentence(name, age, address, hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}.`
};

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming

