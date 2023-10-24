const printSegitiga = 5; // Ganti angka ini sesuai dengan yang diinginkan

// if (typeof printSegitiga == 'number') {
//   for (let i = printSegitiga; i >= 1; i--) {
//     let angka = '';
//     for (let j = 1; j <= i; j++) {
//       angka += j + ' ';
//     }
//     console.log(angka);
//   }
// } else {
//   console.log("Data harus number");
// }

// Output:
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3
// 1 2
// 1

if (typeof printSegitiga == 'number'){
    for (let i = 1; i <= printSegitiga ; i++){
        let angka = '';
        for (let j = printSegitiga; j>=i; j--){
            angka += j +'';
        }
        console.log(angka);
    } 
}else {
    console.log(`Bukan angka yg dimasukan`);
}

// Output:
// 54321
// 5432
// 543
// 54
// 5