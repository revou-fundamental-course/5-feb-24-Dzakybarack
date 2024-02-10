function hitung() {
 var input = parseFloat(document.getElementById("input").value);
 var hasil = (input * 9/5) + 32; // Misalnya, konversi dari Celcius ke Fahrenheit
 console.log(hasil);
 // Menampilkan hasil pada elemen dengan ID "hasil"
 document.getElementById("hasil").innerText =  hasil + " Fahrenheit";
 document.getElementById("proses").innerText = input  + "*9/5 + 32 = " + hasil +" F";
}