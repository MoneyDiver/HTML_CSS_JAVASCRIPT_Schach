function SpielfeldErzeugen(id) {
    let spielfeld = document.getElementById(id);
    let html = "<tabel id='tblSpielfeld'>";
    for(let r = 0; r < 8; r++) {
        html += "<tr id='" + r + "'>";
        for(let c = 0; c < 8; c++) {
            html += "<td id='" + c + "'>";
                if(r == 0) {
                    switch (c) {
                        case 0:
                            html += "<img src='/Figuren/TurmWeiss.png' width='" + this.width + "'>";
                        break;
                        case 1:
                            html += "<img src='/Figuren/SpringerWeiss.png' width='" + this.width + "'>";
                        break;
                        case 2:
                            html += "<img src='/Figuren/LaeuferWeiss.png' width='" + this.width + "'>";
                        break;
                        case 3:
                            html += "<img src='/Figuren/KoenigWeiss.png' width='" + this.width + "'>";
                        break;
                        case 4:
                            html += "<img src='/Figuren/DameWeiss.png' width='" + this.width + "'>";
                        break;
                        case 5:
                            html += "<img src='/Figuren/LaeuferWeiss.png'  width='" + this.width + "'>";
                        break;
                        case 6:
                            html += "<img src='/Figuren/SpringerWeiss.png'  width='" + this.width + "'>";
                        break;
                        case 6:
                            html += "<img src='/Figuren/TurmWeiss.png' width='" + this.width + "'>";
                        break;
                    }
                }
                if(r == 1) {
                    html += "<img src='/Figuren/BauerWeiss.png' width='" + this.width + "'></img>";
                }
            html += "</td>";
        }
        html += "</tr>";
    }
    html += "</tabel>";
    //alert(html);
    spielfeld.innerHTML = html;
}