window.addEventListener("load", betoltes);

function $(elem) {
    return document.querySelectorAll(elem);
}

var kerdesekSzamlalo = 0;
const tesztKerdesekTomb = [];

function betoltes(aktKerdes, key) {
    //tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "altalanosIskolai", megjelenit(tesztKerdesekTomb[0]));
    tesztKerdesek(tesztKerdesekTomb, "tesztKerdesek.json", "kozepIskolai", megjelenit(aktKerdes[key]));
};

function elozoKerdes() {
    $('.elozo')[0].addEventListener("click", function () {
        if (kerdesekSzamlalo < 1) {
            kerdesekSzamlalo = 1;
        } else {
            kerdesekSzamlalo--;
            megjelenit(tesztKerdesekTomb[kerdesek])
        }
    })
};

function kovetkezoKerdes() {
    $('.kovetkezo')[0].addEventListener("click", function () {
        if (kerdesekSzamlalo > tesztKerdesekTomb.length) {
            kerdesekSzamlalo = tesztKerdesekTomb.length;
        } else {
            kerdesekSzamlalo++;
            megjelenit(tesztKerdesekTomb[kerdesek])
        }
    })
};

function tesztKerdesek(tomb, filenev, kulcs, cb_fgv) {
    fetch(filenev)
        .then(valasz => valasz.json())
        .then(adat => {
            console.log(adat[kulcs])

            adat[kulcs].forEach(kerdesek => {
                console.log(kerdesek),
                    tomb.push(kerdesek)

            });
            cb_fgv();
        })
        .catch(hiba => { console.log("Valami hiba történt a fájl beolvasása közben!") });
}

function megjelenit(aktKerdes) {
    console.log(aktKerdes)
    let szoveg = "<ul>";
    for (var key in aktKerdes) {
        szoveg += `<li><span>${aktKerdes[key].kerdes}, ${aktKerdes[key].valasz1}, ${aktKerdes[key].valasz2}, ${aktKerdes[key].valasz3}<span></li>`

    }
    szoveg += "</ul>"
    $('.teszt')[0].innerHTML = szoveg;
}