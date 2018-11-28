/* Mehmet Batur
Applicatieontwikkelaar */
const prijsfris = 1.00;
const prijsbier = 3.00;
const prijswijn = 5.00;
const prijsbitterbal8 = 7.00;
const prijsbitterbal16 = 9.00; //de prijzen van de bitterballen en de drankjes zijn constanten (die worden niet aangepast omdat die altijd hetzelfde blijven.)

var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;
var aantalbitterballen8 = 0;
var aantalbitterballen16 = 0; // Variabelen kunnen worden aangepast
order();

function order(){
  var bestelling = prompt("Welke bestelling wilt u toevoegen? (Kies uit: fris, bier, wijn of snacks.)");
  if (bestelling == "fris" || bestelling == "bier" || bestelling == "wijn" || bestelling == "snacks") {
    var aantalbestelling = parseInt(prompt("Hoeveel " + bestelling + " wilt u toevoegen aan uw bestelling?"));
    if (bestelling == "fris") {
      (aantalfris) += (aantalbestelling);
      console.log(aantalfris);
      order();
    }
    if (bestelling == "bier") {
      (aantalbier) += (aantalbestelling);
      console.log(aantalbier);
      order();
    }
    if (bestelling == "wijn") {
      (aantalwijn) += (aantalbestelling);
      console.log(aantalwijn);
      order();
    }
    if (bestelling == "snacks"){
      var schaal = parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?"));
      if (schaal == "8" || schaal == "16") {
        if (schaal == "8"){
          (aantalbitterballen8) += (aantalbestelling);
          console.log(aantalbitterballen8)
        }
        if (schaal == "16"){
          (aantalbitterballen16) += (aantalbestelling);
          console.log(aantalbitterballen16)
        }
      }
      else{
        alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
      }
      order();
    }
  }
  else if (bestelling == "stop") {
    write();
  }
  else{
    alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.")
  }
} //Dit is onze code voor de bestellingen.

function write(){
  var totaalfris = (prijsfris) * (aantalfris);
  var totaalbier = (prijsbier) * (aantalbier);
  var totaalwijn = (prijswijn) * (aantalwijn);
  var totaalbitterballen8 = (prijsbitterbal8) * (aantalbitterballen8);
  var totaalbitterballen16 = (prijsbitterbal16) * (aantalbitterballen16);
  var totaal = (totaalfris) + (totaalbier) + (totaalwijn) + (totaalbitterballen8) + (totaalbitterballen16);

  if (totaalfris > 0) {
    document.write("Uw frisdrank bestelling kost: €", prijsfris, " x ", aantalfris, " = ", "€", totaalfris);
  }
  if (totaalbier > 0) {
    document.write("<br>Uw bier bestelling kost: €", prijsbier, " x ", aantalbier, " = ", "€", totaalbier);
  }
  if (totaalwijn > 0) {
    document.write("<br>Uw wijn bestelling kost: €", prijswijn, " x ", aantalwijn, " = ", "€", totaalwijn);
  }
  if (totaalbitterballen8 > 0) {
    document.write("<br>Uw 8 bitterballen bestelling kost: €", prijsbitterbal8, " x ", aantalbitterballen8, " = ", "€", totaalbitterballen8);
  }
  if (totaalbitterballen16 > 0) {
    document.write("<br>Uw 16 bitterballen bestelling kost: €", prijsbitterbal16, " x ", aantalbitterballen16, " = ", "€", totaalbitterballen16);
  }
  document.write("<br><br>Het totale bedrag is: €", totaal);
} // Hier berekenen we de prijs van alle bestelde drankjes en bitterballen, als de bestellingen groter dan 0 zijn dan wordt het met document.write in de pagina geschreven.
function restart(){
  console.log("restart")
  location.reload();
} // Dit is een button om de pagina te herladen.
