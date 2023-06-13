function SpielfeldErzeugen(id) {
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
        }
        table.appendChild(row);
    }
}

function FigurenSetzten() {
    for(let r = 0; r < 8; r++) {
        if(r == 0) {
            for(let c = 0; c < 8; c++) {
                let parrent = document.getElementById("sfr" + r + "sfc" + c);
                let figur = document.createElement("img");
                switch (c) {
                    case 0:
                        figur.setAttribute("src", "/Figuren/TurmWeiss.png");
                        figur.setAttribute("alt", "Turm Weiß");
                    break;
                    case 1:
                        figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
                        figur.setAttribute("alt", "Springer Weiß");
                    break;
                    case 2:
                        figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
                        figur.setAttribute("alt", "Läufer Weiß");
                    break;
                    case 3:
                        figur.setAttribute("src", "/Figuren/KoenigWeiss.png");
                        figur.setAttribute("alt", "König Weiß");
                    break;
                    case 4:
                        figur.setAttribute("src", "/Figuren/DameWeiss.png");
                        figur.setAttribute("alt", "Dame Weiß");
                    break;
                    case 5:
                        figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
                        figur.setAttribute("alt", "Läufer Weiß");
                    break;
                    case 6:
                        figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
                        figur.setAttribute("alt", "Springer Weiß");
                    break;
                    case 7:
                        figur.setAttribute("src", "/Figuren/TurmWeiss.png");
                        figur.setAttribute("alt", "Turm Weiß");
                    break;
                }
                figur.setAttribute("width", parrent.clientWidth);
                parrent.appendChild(figur);
            }
        }
        else if(r == 1) {
            for(let c = 0; c < 8; c++) {
                let parrent = document.getElementById("sfr" + r + "sfc" + c);
                let figur = document.createElement("img");
                figur.setAttribute("src", "/Figuren/BauerWeiss.png");
                figur.setAttribute("alt", "Bauer Weiß");
                figur.setAttribute("width", parrent.clientWidth);
                parrent.appendChild(figur);
            }
        }
        else if(r == 6) {
            for(let c = 0; c < 8; c++) {
                let parrent = document.getElementById("sfr" + r + "sfc" + c);
                let figur = document.createElement("img");
                figur.setAttribute("src", "/Figuren/BauerSchwarz.png");
                figur.setAttribute("alt", "Bauer Schwarz");
                figur.setAttribute("width", parrent.clientWidth);
                parrent.appendChild(figur);
            }
        }
        else if(r == 7) {
            for(let c = 0; c < 8; c++) {
                let parrent = document.getElementById("sfr" + r + "sfc" + c);
                let figur = document.createElement("img");
                switch (c) {
                    case 0:
                        figur.setAttribute("src", "/Figuren/TurmSchwarz.png");
                        figur.setAttribute("alt", "Turm Schwarz");
                    break;
                    case 1:
                        figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
                        figur.setAttribute("alt", "Springer Schwarz");
                    break;
                    case 2:
                        figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
                        figur.setAttribute("alt", "Läufer Schwarz");
                    break;
                    case 3:
                        figur.setAttribute("src", "/Figuren/DameSchwarz.png");
                        figur.setAttribute("alt", "Dame Schwarz");
                    break;
                    case 4:
                        figur.setAttribute("src", "/Figuren/KoenigSchwarz.png");
                        figur.setAttribute("alt", "König Schwarz");
                    break;
                    case 5:
                        figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
                        figur.setAttribute("alt", "Läufer Schwarz");
                    break;
                    case 6:
                        figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
                        figur.setAttribute("alt", "Springer Schwarz");
                    break;
                    case 7:
                        figur.setAttribute("src", "/Figuren/TurmSchwarz.png");
                        figur.setAttribute("alt", "Turm Schwarz");
                    break;
                }
                figur.setAttribute("width", parrent.clientWidth);
                parrent.appendChild(figur);
            }
        }
    }
}

// TODO: Überarbeiten damit nur felder mit img-Element den richtigen Eventlistener erhalten
//       bei allen Anderen soll der Eventlistener entfernt werden (removeEventListener)
function EventListenerSetzten() {
    for(let r = 0; r < 8; r++) {
        for(let c = 0; c < 8; c++) {
            if(r == 0 || r == 1 || r == 6 || r == 7) {
                let feld = document.getElementById("sfr" + r + "sfc" + c);
                let imgElement = feld.querySelector("img");
                imgElement.addEventListener("click", function() {
                    ZugOptionBestimmen(imgElement.alt, feld);
                });
            }
        }
    }
}

function ZugOptionBestimmen(Figur, feld) {
    let figurType = Figur.split(" ")[0];
    let figurFarbe = Figur.split(" ")[1];

    if(figurFarbe == "Weiß") {
        // rowNr ermitteln
        let row = feld.id[3];
        // colNr ermitteln
        let col = feld.id[7];
        let zugOptionen = [];
        switch (figurType) {
            case "Bauer":
                zugOptionen = ZugOptionenBauer(row, col, figurFarbe);
                ZugDurchfuehren(feld, zugOptionen);
            break;
            case "Turm":
                zugOptionen = ZugOptionenTurm(row, col, figurFarbe);
                ZugDurchfuehren(feld, zugOptionen);
            case "Springer":
            
            break;
        } 
    }
    else {

    }
}

function ZugDurchfuehren(feld, zugOptionen = []) {
    for(let i = 0; i < zugOptionen.length; i++) {
        let leeresFeld = document.getElementById(zugOptionen[i]);
        leeresFeld.addEventListener("click", function() {
            let figur = feld.querySelector("img");
            this.appendChild(figur);
        });
    }
}

function ZugOptionenBauer(row, col, color) {
    let moeglicheZuege = [];
    let i = 0;
    if(row == 1 && color == "Weiß") {
        row++;
        moeglicheZuege[i] = "sfr" + row + "sfc" + col;
        i++;
        row++;
        moeglicheZuege[i] = "sfr" + row + "sfc" + col;
        i++;
    }
    return moeglicheZuege;
}

function ZugOptionenTurm(row, col, color) {
    let moeglicheZuege = [];
    let i = 0;
    if(col-1 > 0) {
        // Mögliche Zuege links von der Figur eritteln
        for(let c = col; c >= 0; c--) {
            let feld = document.getElementById("sfr" + row + "sfc" + c);
            if(feld.hasChildNodes() == null) {
                moeglicheZuege[i] = "sfr" + row + "sfc" + c;
                i++;
            } else {
                if(feld.querySelector("img").alt.split(" ")[1] != color) {
                    moeglicheZuege[i] = "sfr" + row + "sfc" + c;
                    i++;
                }
                break;
            }
        }
    }
    if(col+1 < 8) {
        // Mögliche Zuege links von der Figur eritteln
        for(let c = col; c < 8; c++) {
            let feld = document.getElementById("sfr" + row + "sfc" + c);
            if(feld.hasChildNodes() == null) {
                moeglicheZuege[i] = "sfr" + row + "sfc" + c;
                i++;
            } else {
                if(feld.querySelector("img").alt.split(" ")[1] != color) {
                    moeglicheZuege[i] = "sfr" + row + "sfc" + c;
                    i++;
                }
                break;
            }
        }
    }
    if(row-1 > 0) {
        // Mögliche Zuege über von der Figur eritteln
        for(let r = row; r >= 0; r--) {
            let feld = document.getElementById("sfr" + r + "sfc" + col);
            if(feld.hasChildNodes() == null) {
                moeglicheZuege[i] = "sfr" + r + "sfc" + col;
                i++;
            } else {
                if(feld.querySelector("img").alt.split(" ")[1] != color) {
                    moeglicheZuege[i] = "sfr" + r + "sfc" + col;
                    i++;
                }
                break;
            }
        }
    }
    if(row+1 < 8) {
        // Mögliche Zuege unter der Figur eritteln
        for(let r = row; r < 8; r++) {
            let feld = document.getElementById("sfr" + r + "sfc" + col);
            if(feld.hasChildNodes() == null) {
                moeglicheZuege[i] = "sfr" + r + "sfc" + col;
                i++;
            } else {
                if(feld.querySelector("img").alt.split(" ")[1] != color) {
                    moeglicheZuege[i] = "sfr" + r + "sfc" + col;
                    i++;
                }
                break;
            }
        }
    }
    return moeglicheZuege;
}