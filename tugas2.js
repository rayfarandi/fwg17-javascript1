const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (typeof mtk === 'number' && typeof bahasaIndonesia === 'number' && typeof bahasaInggris === 'number' && typeof ipa === 'number') {

// Menghitung rata-rata
  const rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;
  if(rataRata => 90 && rataRata<= 100){
    console.log(`Rata-Rata :` +rataRata)
    console.log('Grade : A' )
  }else if(rataRata => 80 && rataRata<= 89){
    console.log(`Rata-Rata :` +rataRata)
    console.log('Grade : B' )
  }else if (rataRata => 70 && rataRata<= 79){
    console.log(`Rata-Rata :` +rataRata)
    console.log('Grade : C' )
  }else if (rataRata => 60 && rataRata<= 69){
    console.log(`Rata-Rata :` +rataRata)
    console.log('Grade : D' )
  }else if (rataRata =>0  && rataRata<= 59){
    console.log(`Rata-Rata :` +rataRata)
    console.log('Grade : A' )
  }
}else {
    console.log('Masukan data berbentuk Number.');
  }
