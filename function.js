

//Tugas 2
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

/*
 BUATLAH KODE FUNCTION DISINI
*/

function shoutOut(){
    console.log(`"Halo Function!"`) // Menampilkan "Halo Function!" di console
}
shoutOut()




// Tugas 3
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

/*
 BUATLAH KODE FUNCTION DISINI
*/


function calculateMultiply(){
    hasilkali = num1 * num2;
        return hasilkali;
}
    let num1 = 5;
    let num2 = 6;
        let hasilPerkalian = calculateMultiply(num1,num2);
    console.log(hasilPerkalian); // Menampilkan angka 30





// // Tugas 4
// // Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: 
// // "Nama saya [Name], 
// // umur saya [Age] tahun, 
// // alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

// /*
//  BUATLAH KODE FUNCTION DISINI
// */


    
let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "Gaming";

processSentence = () => {
       return `Nama saya ${name}.\nUmur saya ${age} Tahun.\nAlamat saya di ${address}. \nSaya punya hobi yaitu ${hobby}!`;
}

    var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
