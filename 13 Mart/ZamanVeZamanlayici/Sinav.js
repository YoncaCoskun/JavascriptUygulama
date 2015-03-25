var soruNo = 0;
var kullaniciCevaplari = [];
var timer;
var toplamSure;
var lblSoru;
var divSecimler;
var lblSure;
var lblSoruNo
var fldSorular;
var lblPuan;
var cevapGoruntulensinMi = false;

function baslangicAyarlari() {
    lblSoru = document.getElementById("lblSoru");
    divSecimler = document.getElementById("divSecimler");
    lblSure = document.getElementById("lblSure");
    lblSoruNo = document.getElementById("lblSoruNo");
    fldSorular = document.getElementById("fldSorular");
    lblPuan = document.getElementById("lblPuan");

    toplamSure = 30 * sorular.length;
    lblSure.innerText = toplamSure;

    timer = setInterval(function () {
        toplamSure -= 1;
        lblSure.innerText = toplamSure;
        if (toplamSure == 0) {
            clearInterval(timer);
            puanHesapla();
        }
    }, 1000);
    soruGoster();
}

function soruGoster() {
    divSecimler.innerHTML = "";

    var gosterilecekSoru = sorular[soruNo];
    lblSoru.innerText = gosterilecekSoru.soruMetni;

    var secimTuru = gosterilecekSoru.dogruCevap.length > 1 ? "checkbox" : "radio";

    for (var i in gosterilecekSoru.cevaplar) {
        var secim = document.createElement("input");
        secim.type = secimTuru;
        secim.name = "1";
        secim.value = i;
        if (kullaniciCevaplari[soruNo] != undefined) {
            var yanit = kullaniciCevaplari[soruNo].split(";");

            for (var x in yanit) {
                if (i == parseInt(yanit[x])) {
                    secim.checked = true;
                }
            }
        }

        secim.onchange = function (event) {
            var kullaniciCevabi = kullaniciCevaplari[soruNo];  // [2, 4]
            if (event.srcElement.checked) {
                if (kullaniciCevabi == undefined) {
                    kullaniciCevabi = "";
                }
                if (kullaniciCevabi != "") {
                    kullaniciCevabi += ";"
                }
                kullaniciCevabi += parseInt(event.srcElement.value);
                kullaniciCevaplari[soruNo] = kullaniciCevabi;
            } else {
                var dizi = kullaniciCevabi.split(";");
                var cevap = "";
                for (var i in dizi) {
                    if (dizi[i] != event.srcElement.value) {
                        if (cevap != "") {
                            cevap += ";";
                        }
                        cevap += dizi[i];
                    }
                }
                kullaniciCevaplari[soruNo] = cevap;
            }
            //kullaniciCevaplari[x.value] = 
        }
        divSecimler.appendChild(secim);

        var secimText = document.createElement("span");
        secimText.innerText = gosterilecekSoru.cevaplar[i];
        if (cevapGoruntulensinMi) {
            for (var j = 0; j < gosterilecekSoru.dogruCevap.length; j++) {
                if (gosterilecekSoru.dogruCevap[j] == i) {
                    secimText.style.color = "green";
                }
            } 
        }

        divSecimler.appendChild(secimText);

        divSecimler.appendChild(document.createElement("br"));
    }
    cevapGoruntulensinMi = false;

    lblSoruNo.innerText = sorular.length + "/" + (soruNo + 1);



}


function geriGit() {
    if (soruNo > 0) {
        soruNo--;
        soruGoster();
    }
}

function ileriGit() {
    if (soruNo < sorular.length - 1) {
        soruNo++;
        soruGoster();
    } else {
        var secim = confirm("Sorular bitti. Sınavı sonlandırmak istiyor musunuz?");
        if (secim) {
            puanHesapla();
        }
    }

}

function puanHesapla() {
    var soruPuani = 100 / sorular.length;
    var toplamPuan = 0;
    for (var i in kullaniciCevaplari) {
        var kullaniciCevabi = kullaniciCevaplari[i];

        if (kullaniciCevabi != undefined) {
            var cevaplar = kullaniciCevabi.split(";");

            var dogruCevap = sorular[i].dogruCevap;

            if (cevaplar.length == dogruCevap.length) {
                var puanlansinMi = true;
                for (var i = 0; i < dogruCevap.length; i++) { // b   c
                    var cevapDogruMu = false;
                    for (var x in cevaplar) {   // a    b
                        if (dogruCevap[i] == cevaplar[x]) {
                            cevapDogruMu = true;
                        }
                    }
                    if (!cevapDogruMu) {
                        puanlansinMi = false;
                        break;
                    }
                }
                if (puanlansinMi) {
                    toplamPuan += soruPuani;
                }
            }
        }

        

    }

    lblPuan.innerText = "Puanınız : " + toplamPuan;
    fldSorular.style.display = "none";
    lblSure.style.display = "none";
}

function cevapKaydet(kullaniciCevabi) {
    kullaniciCevaplari[soruNo] = kullaniciCevabi;
}
function sureyiDurdur() {
    clearInterval(timer);
}
function cevapGoster() {
    cevapGoruntulensinMi = true;
    soruGoster();
}