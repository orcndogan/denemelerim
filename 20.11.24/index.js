function macOzeti(evSahibiTakim, deplasmanTakimi) {
    const periyotSkoru = () => Math.floor(Math.random() * (26 - 12 + 1)) + 12;
  
    let macOzet = [];
  
    let evSahibiToplam = 0;
    let deplasmanToplam = 0;
  
    for (let i = 1; i <= 4; i++) {
      let evSahibiSkor = periyotSkoru();
      let deplasmanSkor = periyotSkoru();
  
      macOzet.push(
        `${i}. Periyot: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanTakimi} ${deplasmanSkor}`
      );
  
      evSahibiToplam += evSahibiSkor;
      deplasmanToplam += deplasmanSkor;
    }
  
    if (evSahibiToplam > deplasmanToplam) {
      macOzet.push(
        `Maç Sonucu: ${evSahibiTakim} ${evSahibiToplam} - ${deplasmanTakimi} ${deplasmanToplam} kazandı`
      );
    } else if (evSahibiToplam < deplasmanToplam) {
      macOzet.push(
        `Maç Sonucu: ${evSahibiTakim} ${evSahibiToplam} - ${deplasmanTakimi} ${deplasmanToplam} kaybetti`
      );
    } else if ((evSahibiToplam = deplasmanToplam)) {
      macOzet.push(
        `Maç ${evSahibiToplam} - ${deplasmanToplam} ile uzatmalara gitti`
      );
    }
  
    return macOzet;
  }
  
const sonuc = macOzeti("Galatasaray", "Fenerbahce");
console.log(sonuc);
module.exports = macOzeti;