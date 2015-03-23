
function Asker() { // class ların ılk ısmı herzaman buyuk olmalı
    this.AskerAdi; 
    this.Silahi;

    this.atesEt = function () {
        var metin = this.AskerAdi + "\n";

        for (var i = 0; i < 20; i++) {
            metin += "\t" + this.Silahi + "_" + i + "\n";
        }
        return metin;
    }

}