const printSegitiga = 5

if (typeof printSegitiga !== `number`) {
    return console.log(`Bukan angka yg dimasukan`);
}

  for (let i = printSegitiga; i >= 1; i--) {
    let angka = '';
    for (let j = 1; j <= i; j++) {
      angka += j;
    }
    console.log(angka);
  }


