//Zaman dilimini kullanarak biçimlendirilmiş bir tarih ve saat bilgisine döndüren fonksiyon
function convertTimeStamp(timeStamp,timezone){
    //zaman dilimini saat cinsinden dönüştürür (saniyeden saate)
    const convertTimeZone = timezone/3600
    //yeni bir tarih nesnesini oluştur
    const date = new Date(timeStamp * 1000)
// tarih ve saat bilgisi için seçenekleri belirle
    const options = {
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric",
        hour:"numeric",
        minute:"numeric",
        timezone:`Etc/GMT${convertTimeZone >= 0 ? "-" : "+"}${Math.abs(
            convertTimeZone
        )}`, //bunu şöyle okuruz: eğer timezone büyük eşit 0 ise (? eğer anlamına geliyor) - koy, 
        //değilse (: değilse anlamına geliyor) + koy. Zaman dilimini belirleme yani.
        hour12:true, //12 saat formatında gösterilsin mi
    }
    //tarihi ve saati kullanıcıya dost bir formatta döndürür. 
    return date.toLocaleString("en-US", options) //en-US koyduk ki İngilizce alsın çünkü API'de Türkçe almıyo.
}

//ülke kodunu ülke adına çeviren fonksiyon
function convertCountryCode(country){
    let regionNames = new Intl.DisplayNames(["en"],{type: "region"})
    //ülke kodunu alınan bu "Intl.DisplayNames örneği kullanarak ülke adına dönderir.
    console.log(regionNames.of(country))
    return regionNames.of(country)
}
export {convertTimeStamp, convertCountryCode}
/*Intl.DisplayNames: JS'te uluslararası dil ve bölge adlarına çevirmek için kullanılan bir API'dir. 
Intl: Internationalization 
DisplayNames*/