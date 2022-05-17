window.addEventListener("load", betoltes);

function $(elem) {
    return document.querySelectorAll(elem);
}

var kerdesekSzamlalo = 0;
const tesztKerdesekTomb = [];

function betoltes(aktKerdes, key) {
    //tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "altalanosIskolai", megjelenit(tesztKerdesekTomb[0]));
    $('.altIsk')[0].addEventListener("click", function(){
        tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "altalanosIskolai", megjelenit);
    });
    $('.kozepIsk')[0].addEventListener("click", function(){
        tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "kozepIskolai", megjelenit);
    });
    $('.fiatalFelnott')[0].addEventListener("click", function(){
        tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "fiatalFelnottKerdesek", megjelenit);
    });
    
    $('.elozo')[0].addEventListener("click", elozoKerdes)
    $('.kovetkezo')[0].addEventListener("click", kovetkezoKerdes)
};

function elozoKerdes() {
    kerdesekSzamlalo--;
    console.log(kerdesekSzamlalo)
    if (kerdesekSzamlalo < 0) {
        kerdesekSzamlalo = tesztKerdesekTomb.length-1;
    } 
    megjelenit()
};

function kovetkezoKerdes() {
    kerdesekSzamlalo++;
    console.log(kerdesekSzamlalo)
    if (kerdesekSzamlalo > tesztKerdesekTomb.length-1){
        kerdesekSzamlalo = 0;
    } 
    megjelenit()
};

function tesztKerdesek(tomb, filenev, kulcs, cb_fgv) {
    fetch(filenev)
        .then(valasz => valasz.json())
        .then(adat => {
            //console.log(adat[kulcs])

            adat[kulcs].forEach(kerdesek => {
                //console.log(kerdesek)
                tomb.push(kerdesek)

            });
            cb_fgv(tomb);
        })
        .catch(hiba => {
            console.log("Valami hiba történt a fájl beolvasása közben!")
        });
}

function megjelenit() {
    let szoveg = "";
    //console.log(aktKerdes)
    szoveg += "<ul>";
    szoveg += `<li><span>
        <h2>${tesztKerdesekTomb[kerdesekSzamlalo].kerdes}</h2> 
        <div>
            <input type="radio" name="kerdes" value="." id="1">
            <label for="m">${tesztKerdesekTomb[kerdesekSzamlalo].valasz1}</label>
        </div>
        <div>
            <input type="radio" name="kerdes" value="." id="2">
            <label for="m">${tesztKerdesekTomb[kerdesekSzamlalo].valasz2}</label>
        </div> 
        <div>
            <input type="radio" name="kerdes" value="." id="3">
            <label for="m">${tesztKerdesekTomb[kerdesekSzamlalo].valasz3}</label>
        </div> 
        <span></li>`

    szoveg += "</ul>"
    $('.teszt')[0].innerHTML = szoveg;
}