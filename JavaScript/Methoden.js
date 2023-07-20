const SpiefeldFelder = [];

//#region Klasse-Figur
class Figur {
    // Pfad zum Image
    ImgPath = "";
    // ImageWidth
    ImgWidth = 0;
    // ImageHeight
    ImgHeight = 0;
    // Farbe der Figur
    Color = "";
    // Aktuelle Position auf dem Spiefeld
    AktPos = "";
    // Zeigt an ob die Figur noch Spielbar ist oder bereits geschlagen wurde
    Geschlagen = false;
    // Liste aller erbenden ELemente
    static ListeAllerErbendenFiguren = new Array();
    // Index des aktuellen Elements in dem Array ListeAllerErbendenFiguren
    Index = 0;

    constructor(color, imgPath, aktPos) {
        this.color = color;
        this.ImgPath = imgPath;
        this.AktPos = aktPos;
        this.Index = Figur.ListeAllerErbendenFiguren.push(this);
        let parrentElement = document.getElementById(this.AktPos);
        this.ImgWidth = parrentElement.clientWidth;
        this.ImgHeight = parrentElement.clientHeight;
        this.Show(this.AktPos);
        this.EventListenerSetzten();
    }

    // Zeigt das Element auf dem Spiefeld an
    Show(zielID) {      
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", this.ImgPath);
        imgElement.setAttribute("width", this.ImgWidth);
        imgElement.setAttribute("height", this.ImgHeight);
        let parrentElement = document.getElementById(zielID);
        parrentElement.appendChild(imgElement);
        return imgElement;
    }

    // Setzten den Eventlistener
    EventListenerSetzten() {
        document.getElementById(this.AktPos).firstChild.addEventListener("click", () => {
            this.RemoveAllEventListner();
            let zugOptionen = this.ErmittleZugoptionen();
            this.ZugoptionenVerfügbarMachen(zugOptionen);
        });
    }

    // Klickevents bei den Zugoptionen Setzten
    ZugoptionenVerfügbarMachen(zugOptionen = []) {
        let feldOhneEventlistener = [];
        for(let i = 0; i < zugOptionen.length; i++) {
            let feld = document.getElementById(zugOptionen[i]);
            feld.setAttribute("style", "background-color:red");
            feldOhneEventlistener[i] = feld.cloneNode(true);
            feld.addEventListener("click", () => {
                this.RemoveEventListnerVonZugoptionen(zugOptionen, feldOhneEventlistener);
                this.ZugDurchführen(feld);
            });
        } 
    }  

    // Entfernt die Cick-Events von den Zugoptionen
    RemoveEventListnerVonZugoptionen(zugOptionen = [], feldOhneEventlistener = []) {
        for(let i = 0; i < zugOptionen.length; i++) {
            let feld = document.getElementById(zugOptionen[i]);
            feld.parentNode.replaceChild(feldOhneEventlistener[i], feld);
        }
    }

    RemoveAllEventListner() {
        SpiefeldFelder.forEach(feld => {
            let feldAlt = document.getElementById(feld.id);
            if(!feldAlt.hasChildNodes()) {
                feldAlt.parentNode.replaceChild(feld, feldAlt);
            }
        });
    }
}
//#endregion
//#region Klasse-Turm
class Turm extends Figur{
    constructor(color, imgPath, aktPos) {
        super(color, imgPath, aktPos);
    }

    ErmittleZugoptionen() {
        let möglicheZüge = new Array();
        // Nach Rechts prüfen
        for (let c = Number(this.AktPos[7]) + 1; c < 8; c++) {
            let id = "sfr" + this.AktPos[3] + "sfc" + c;
            let eintragBereitsGefunden = false;
            for (let i = 0; i < Figur.ListeAllerErbendenFiguren.length; i++) {
                let f = Figur.ListeAllerErbendenFiguren[i];
                if (f.AktPos == id) {
                    if (f.Color != this.Color) {
                        eintragBereitsGefunden = true;
                        möglicheZüge.push(id);
                        break;
                    } else {
                        eintragBereitsGefunden = true;
                        break;
                    }
                }
            }
            if (!eintragBereitsGefunden) {
                möglicheZüge.push(id);
            }
        }
        // Nach links prüfen
        for (let c = Number(this.AktPos[7]) - 1; c > 0; c--) {
            let id = "sfr" + this.AktPos[3] + "sfc" + c;
            let eintragBereitsGefunden = false;
            for (let i = 0; i < Figur.ListeAllerErbendenFiguren.length; i++) {
                let f = Figur.ListeAllerErbendenFiguren[i];
                if (f.AktPos == id) {
                    if (f.Color != this.Color) {
                        eintragBereitsGefunden = true;
                        möglicheZüge.push(id);
                        break;
                    } else {
                        eintragBereitsGefunden = true;
                        break;
                    }
                }
            }
            if (!eintragBereitsGefunden) {
                möglicheZüge.push(id);
            }
        }
        // Nach Unten prüfen
        for (let r = Number(this.AktPos[3]) + 1; r < 8; r++) {
            let id = "sfr" + r + "sfc" + this.AktPos[7];
            let eintragBereitsGefunden = false;
            for (let i = 0; i < Figur.ListeAllerErbendenFiguren.length; i++) {
                let f = Figur.ListeAllerErbendenFiguren[i];
                if (f.AktPos == id) {
                    if (f.Color != this.Color) {
                        eintragBereitsGefunden = true;
                        möglicheZüge.push(id);
                        break;
                    } else {
                        eintragBereitsGefunden = true;
                        break;
                    }
                }
            }
            if (!eintragBereitsGefunden) {
                möglicheZüge.push(id);
            }
        }
        // Nach Open prüfen
        for (let r = Number(this.AktPos[3]) - 1; r > 0; r--) {
            let id = "sfr" + r + "sfc" + this.AktPos[7];
            let eintragBereitsGefunden = false;
            for (let i = 0; i < Figur.ListeAllerErbendenFiguren.length; i++) {
                let f = Figur.ListeAllerErbendenFiguren[i];
                if (f.AktPos == id) {
                    if (f.Color != this.Color) {
                        eintragBereitsGefunden = true;
                        möglicheZüge.push(id);
                        break;
                    } else {
                        eintragBereitsGefunden = true;
                        break;
                    }
                }
            }
            if (!eintragBereitsGefunden) {
                möglicheZüge.push(id);
            }
        }

        return möglicheZüge;
    }

    // Zug druchführen
    ZugDurchführen(feld) {
        document.getElementById(this.AktPos).removeChild(document.getElementById(this.AktPos).firstChild);
        new Turm(this.Color, this.ImgPath, feld.id);
    } 
}
//#endregion

//#region Spiefeld
function SpielfeldErzeugen(id) {
    let index = 0;
    let spielfeld = document.getElementById(id);
    let table = document.createElement("tabel");
    table.setAttribute("id", "tblSpiefeld")
    spielfeld.appendChild(table);
    for(let r = 0; r < 8; r++) {
        let row = document.createElement("tr");
        // sfc = SpielFeldRow
        row.setAttribute("id", "sfr"+r)
        for(let c = 0; c < 8; c++) {
            let col = document.createElement("td");
            // sfc = SpielFeldCollumn
            col.setAttribute("id", "sfr" + r + "sfc"+c)
            if(c % 2 == 0 && r % 2 != 0)
                col.setAttribute("style", "background-color: darkgray");
            if(c % 2 != 0 && r % 2 == 0)
                col.setAttribute("style", "background-color: darkgray");
            row.appendChild(col);

            SpiefeldFelder[index++] = col.cloneNode();
        }
        table.appendChild(row);
    }
}

window.addEventListener("DOMContentLoaded", function() {
    let Figuren = [new Turm("Weiß", "/Figuren/TurmWeiss.png", "sfr0sfc0"), new Turm("Weiß", "/Figuren/TurmWeiss.png", "sfr0sfc7")];
});
//#endregion

// function FigurenSetzten() {
//     for(let r = 0; r < 8; r++) {
//         if(r == 0) {
//             for(let c = 0; c < 8; c++) {
//                 let parrent = document.getElementById("sfr" + r + "sfc" + c);
//                 let figur = document.createElement("img");
//                 switch (c) {
//                     case 0:
//                         figur.setAttribute("src", "/Figuren/TurmWeiss.png");
//                         figur.setAttribute("alt", "Turm Weiß");
//                     break;
//                     case 1:
//                         figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
//                         figur.setAttribute("alt", "Springer Weiß");
//                     break;
//                     case 2:
//                         figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
//                         figur.setAttribute("alt", "Läufer Weiß");
//                     break;
//                     case 3:
//                         figur.setAttribute("src", "/Figuren/KoenigWeiss.png");
//                         figur.setAttribute("alt", "König Weiß");
//                     break;
//                     case 4:
//                         figur.setAttribute("src", "/Figuren/DameWeiss.png");
//                         figur.setAttribute("alt", "Dame Weiß");
//                     break;
//                     case 5:
//                         figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
//                         figur.setAttribute("alt", "Läufer Weiß");
//                     break;
//                     case 6:
//                         figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
//                         figur.setAttribute("alt", "Springer Weiß");
//                     break;
//                     case 7:
//                         figur.setAttribute("src", "/Figuren/TurmWeiss.png");
//                         figur.setAttribute("alt", "Turm Weiß");
//                     break;
//                 }
//                 figur.setAttribute("width", parrent.clientWidth);
//                 parrent.appendChild(figur);
//             }
//         }
//         else if(r == 1) {
//             for(let c = 0; c < 8; c++) {
//                 let parrent = document.getElementById("sfr" + r + "sfc" + c);
//                 let figur = document.createElement("img");
//                 figur.setAttribute("src", "/Figuren/BauerWeiss.png");
//                 figur.setAttribute("alt", "Bauer Weiß");
//                 figur.setAttribute("width", parrent.clientWidth);
//                 parrent.appendChild(figur);
//             }
//         }
//         else if(r == 6) {
//             for(let c = 0; c < 8; c++) {
//                 let parrent = document.getElementById("sfr" + r + "sfc" + c);
//                 let figur = document.createElement("img");
//                 figur.setAttribute("src", "/Figuren/BauerSchwarz.png");
//                 figur.setAttribute("alt", "Bauer Schwarz");
//                 figur.setAttribute("width", parrent.clientWidth);
//                 parrent.appendChild(figur);
//             }
//         }
//         else if(r == 7) {
//             for(let c = 0; c < 8; c++) {
//                 let parrent = document.getElementById("sfr" + r + "sfc" + c);
//                 let figur = document.createElement("img");
//                 switch (c) {
//                     case 0:
//                         figur.setAttribute("src", "/Figuren/TurmSchwarz.png");
//                         figur.setAttribute("alt", "Turm Schwarz");
//                     break;
//                     case 1:
//                         figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
//                         figur.setAttribute("alt", "Springer Schwarz");
//                     break;
//                     case 2:
//                         figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
//                         figur.setAttribute("alt", "Läufer Schwarz");
//                     break;
//                     case 3:
//                         figur.setAttribute("src", "/Figuren/DameSchwarz.png");
//                         figur.setAttribute("alt", "Dame Schwarz");
//                     break;
//                     case 4:
//                         figur.setAttribute("src", "/Figuren/KoenigSchwarz.png");
//                         figur.setAttribute("alt", "König Schwarz");
//                     break;
//                     case 5:
//                         figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
//                         figur.setAttribute("alt", "Läufer Schwarz");
//                     break;
//                     case 6:
//                         figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
//                         figur.setAttribute("alt", "Springer Schwarz");
//                     break;
//                     case 7:
//                         figur.setAttribute("src", "/Figuren/TurmSchwarz.png");
//                         figur.setAttribute("alt", "Turm Schwarz");
//                     break;
//                 }
//                 figur.setAttribute("width", parrent.clientWidth);
//                 parrent.appendChild(figur);
//             }
//         }
//     }
// }

// // TODO: Überarbeiten damit nur felder mit img-Element den richtigen Eventlistener erhalten
// //       bei allen Anderen soll der Eventlistener entfernt werden (removeEventListener)
// function EventListenerSetzten() {
//     RemoveAllEventListener();
//     for(let r = 0; r < 8; r++) {
//         for(let c = 0; c < 8; c++) {
//             let feld = document.getElementById("sfr" + r + "sfc" + c);
//             let imgElement = feld.querySelector("img");
//             if(imgElement != null) {
//                 imgElement.addEventListener("click", function() {
//                     let zugOptionen = [];
//                     zugOptionen = ZugOptionBestimmen(imgElement.alt, imgElement.parentElement);
//                     ZügeVerfügbarMachen(imgElement.parentElement, zugOptionen);
//                     zugOptionen = null;
//                     EventListenerSetzten();
//                 });
//             }
//         }
//     }
// }

// // Löscht alle Click Events
// function RemoveAllEventListener() {
//     for(let r = 0; r < 8; r++) {
//         for(let c = 0; c < 8; c++) {
//             let feld = document.getElementById("sfr" + r + "sfc" + c);
//             feld.removeEventListener("click", null);
//         }
//     }
// }

// function ZugOptionBestimmen(Figur, feld) {
//     let figurType = Figur.split(" ")[0];
//     let figurFarbe = Figur.split(" ")[1];

//     if(figurFarbe == "Weiß") {
//         // rowNr ermitteln
//         let row = feld.id[3];
//         // colNr ermitteln
//         let col = feld.id[7];
//         switch (figurType) {
//             case "Bauer":
//                 return ZugOptionenBauer(row, col, figurFarbe);
//             case "Turm":
//                 return ZugOptionenTurm(row, col, figurFarbe);
//             case "Springer":
            
//             break;
//         } 
//     }
//     else {

//     }
// }

// function ZügeVerfügbarMachen(feld, zugOptionen = []) {
//     for(let i = 0; i < zugOptionen.length; i++) {
//         let leeresFeld = document.getElementById(zugOptionen[i]);
//         leeresFeld.addEventListener("click", function() {
//             ZugDurchführen(leeresFeld, feld);
//         });
//     }
// }

// function ZugDurchführen(ziel, ausgangspunkt) {
//     ziel.appendChild(ausgangspunkt.querySelector("img"));
// }

// // TODO: Schlagoptionen ergänzen
// function ZugOptionenBauer(row, col, color) {
//     let moeglicheZuege = [];
//     let i = 0;
//     if(row == 1 && color == "Weiß") {
//         row++;
//         moeglicheZuege[i] = "sfr" + row + "sfc" + col;
//         i++;
//         row++;
//         moeglicheZuege[i] = "sfr" + row + "sfc" + col;
//         i++;
//     }
//     return moeglicheZuege;
// }

// function ZugOptionenTurm(row, col, color) {
//     let moeglicheZuege = [];
//     let i = 0;
//     if(col-1 > 0) {
//         // Mögliche Zuege links von der Figur eritteln
//         for(let c = col; c >= 0; c--) {
//             let feld = document.getElementById("sfr" + row + "sfc" + c);
//             if(feld.hasChildNodes() == null) {
//                 moeglicheZuege[i] = "sfr" + row + "sfc" + c;
//                 i++;
//             } else {
//                 if(feld.querySelector("img").alt.split(" ")[1] != color) {
//                     moeglicheZuege[i] = "sfr" + row + "sfc" + c;
//                     i++;
//                 }
//                 break;
//             }
//         }
//     }
//     if(col+1 < 8) {
//         // Mögliche Zuege links von der Figur eritteln
//         for(let c = col; c < 8; c++) {
//             let feld = document.getElementById("sfr" + row + "sfc" + c);
//             if(feld.hasChildNodes() == null) {
//                 moeglicheZuege[i] = "sfr" + row + "sfc" + c;
//                 i++;
//             } else {
//                 if(feld.querySelector("img").alt.split(" ")[1] != color) {
//                     moeglicheZuege[i] = "sfr" + row + "sfc" + c;
//                     i++;
//                 }
//                 break;
//             }
//         }
//     }
//     if(row-1 > 0) {
//         // Mögliche Zuege über von der Figur eritteln
//         for(let r = row; r >= 0; r--) {
//             let feld = document.getElementById("sfr" + r + "sfc" + col);
//             if(feld.hasChildNodes() == null) {
//                 moeglicheZuege[i] = "sfr" + r + "sfc" + col;
//                 i++;
//             } else {
//                 if(feld.querySelector("img").alt.split(" ")[1] != color) {
//                     moeglicheZuege[i] = "sfr" + r + "sfc" + col;
//                     i++;
//                 }
//                 break;
//             }
//         }
//     }
//     if(row+1 < 8) {
//         // Mögliche Zuege unter der Figur eritteln
//         for(let r = row; r < 8; r++) {
//             let feld = document.getElementById("sfr" + r + "sfc" + col);
//             if(feld.hasChildNodes() == null) {
//                 moeglicheZuege[i] = "sfr" + r + "sfc" + col;
//                 i++;
//             } else {
//                 if(feld.querySelector("img").alt.split(" ")[1] != color) {
//                     moeglicheZuege[i] = "sfr" + r + "sfc" + col;
//                     i++;
//                 }
//                 break;
//             }
//         }
//     }
//     return moeglicheZuege;
// }