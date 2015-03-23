function Kelebek() {
    this.xKoord;
    this.yKoord;
    this.resimGenislik = 50;
    this.resimYukseklik = 50;
    this.resim;
    //kelebek ıcın olusturulma anı olusturcaz

    this.olustur = function (oyunAlani) {
        var img = document.createElement("img"); // her olustur dedıgımızde bır tane resım olusturulacak
        this.resim = img;
        img.src = "kelebek.gif";
        //kelebegı oyun alanında  ıstedıgı yere hareket edebılmesı ıcın posıtıon kullanmalıyız asagıdakı gıbı;
        img.style.position = "absolute";
        //resımlerımızı bellı pozisyonlarda olusturmalıyız

        this.xKoord = Math.round(Math.random() * parseInt((oyunAlani.offsetWidth) - this.resimGenislik));
        this.yKoord = Math.round(Math.random() * parseInt((oyunAlani.offsetHeight) - this.resimYukseklik));

        img.style.width = "50px";
        img.style.height = "50px";
        img.style.top = this.yKoord + "px";
        img.style.left = this.xKoord + "px";

        oyunAlani.appendChild(img);  // resmı (divin icine eklemek ıcın) goruntulemek ıcın oyun alanına :

    }
  
        //hangi yone gıdecegını tespit edıcez
        



    

}