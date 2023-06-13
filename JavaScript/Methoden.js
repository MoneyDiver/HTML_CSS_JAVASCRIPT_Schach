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
        switch (figurType) {
            case "Turm":
                return ZugOptionenTurm(row, col);
            case "Springer":
            
            break;
        } 
    }
    else {

    }
}

function ZugOptionenTurm(row, col) {
    let moeglicheZuege = [];
    let i = 0;
    // Mögliche Zuege in der Zeile ermitteln
    for(let c = 0; c < 8; c++) {
        
    }
    return moeglicheZuege;
}