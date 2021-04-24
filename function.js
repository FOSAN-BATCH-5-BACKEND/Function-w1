// Tugas 2 
const shoutOut = () => console.log("Halo Function!");
console.log(shoutOut());

// Tugas 3
const calculateMultiply = (num1, num2) => num1 * num2;

let num1 = 5;
let num2 = 6; 

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);

// Tugas 4
const processSentence = (name, age, address, hobby) => {
    return `Nama saya ${name}, umur saya ${age}, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

let name = "Agus";
let age = 30;
let address = "Jln.Malioboro, Yogjakarta";
let hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);