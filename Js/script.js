var nilaiAsliInput;
function hitung() {
 var input = parseFloat(document.getElementById("input").value);
 var hasil = (input * 9/5) + 32; // Misalnya, konversi dari Celcius ke Fahrenheit
 console.log(hasil);
 // Menampilkan hasil pada elemen dengan ID "hasil"
 document.getElementById("hasil").innerText =  hasil + " Fahrenheit";
 document.getElementById("proses").innerText = input  + "*9/5 + 32 = " + hasil +" F";
}

function fungsireset() {
 var input = document.getElementById("input");
 nilaiAsliInput = input.value;
 input.value = "";
 // Menampilkan hasil pada elemen dengan ID "hasil"
 document.getElementById("hasil").innerText =  "";
 document.getElementById("proses").innerText = "";
}

function reverseInput() {
 // Mendapatkan referensi ke elemen input
 var input = document.getElementById("input");
 // Mengembalikan nilai input ke nilai asli sebelum direset
 input.value = nilaiAsliInput;
 var hasil = (nilaiAsliInput * 9/5) + 32; // Misalnya, konversi dari Celcius ke Fahrenheit
 console.log(hasil);
 // Menampilkan hasil pada elemen dengan ID "hasil"
 document.getElementById("hasil").innerText =  hasil + " Fahrenheit";
 document.getElementById("proses").innerText = nilaiAsliInput  + "*9/5 + 32 = " + hasil +" F";
}