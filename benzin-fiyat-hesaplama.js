let dizel = 24.53, benzin = 22.25, lpg = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1 - Dizel" + yeniSatir 
+"2 - Benzin" + yeniSatir 
+"3 - LPG" + yeniSatir 
+"Yakıt Türünüzü Seçiniz: ";

let yakitTipi = prompt(yakitMetni);
let yakitLitresi = prompt("Yakıt Litresi Giriniz: ");
let bakiye = prompt("Bakiyenizi Giriniz: ")

if(yakitTipi == "1"){
    tutar = dizel * yakitLitresi
    if(bakiye<tutar){
        console.log("!Bakiyeniz Yetersiz!")
    }

    else{
        console.log("Ödemeniz Yapılmıştır.")
    }
}

else if (yakitTipi == "2"){
    tutar = benzin * yakitLitresi
    if(bakiye<tutar){
        console.log("!Bakiyeniz Yetersiz!")
    }

    else{
        console.log("Ödemeniz Yapılmıştır.")
    }
}

else if (yakitTipi == "3"){
    tutar = lpg * yakitLitresi
    if(bakiye<tutar){
        console.log("!Bakiyeniz Yetersiz!")
    }

    else{
        console.log("Ödemeniz Yapılmıştır.")
    }
}

else{
    alert("!Lütfen Geçerli Bir Yakıt Türü Seçiniz!")
}