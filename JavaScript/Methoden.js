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
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 1:
                        figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
                        figur.setAttribute("alt", "Springer Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 2:
                        figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
                        figur.setAttribute("alt", "Läufer Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 3:
                        figur.setAttribute("src", "/Figuren/KoenigWeiss.png");
                        figur.setAttribute("alt", "König Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 4:
                        figur.setAttribute("src", "/Figuren/DameWeiss.png");
                        figur.setAttribute("alt", "Dame Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 5:
                        figur.setAttribute("src", "/Figuren/LaeuferWeiss.png");
                        figur.setAttribute("alt", "Läufer Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 6:
                        figur.setAttribute("src", "/Figuren/SpringerWeiss.png");
                        figur.setAttribute("alt", "Springer Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 7:
                        figur.setAttribute("src", "/Figuren/TurmWeiss.png");
                        figur.setAttribute("alt", "Turm Weiß");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                }
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
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 1:
                        figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
                        figur.setAttribute("alt", "Springer Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 2:
                        figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
                        figur.setAttribute("alt", "Läufer Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 3:
                        figur.setAttribute("src", "/Figuren/DameSchwarz.png");
                        figur.setAttribute("alt", "Dame Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 4:
                        figur.setAttribute("src", "/Figuren/KoenigSchwarz.png");
                        figur.setAttribute("alt", "König Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 5:
                        figur.setAttribute("src", "/Figuren/LaeuferSchwarz.png");
                        figur.setAttribute("alt", "Läufer Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 6:
                        figur.setAttribute("src", "/Figuren/SpringerSchwarz.png");
                        figur.setAttribute("alt", "Springer Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                    case 7:
                        figur.setAttribute("src", "/Figuren/TurmSchwarz.png");
                        figur.setAttribute("alt", "Turm Schwarz");
                        figur.setAttribute("width", parrent.clientWidth);
                        parrent.appendChild(figur);
                    break;
                }
            }
        }
    }
}