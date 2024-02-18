const API_KEY = "9bf3ca9628224175b260015e5f80f66e"
//fonksiyon şehir ve birim bilgilerini parametre olarak alır. 
async function fetchWeatherData(city, units) {
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`)
    //console.log(response.json())
        //eğer istek başarılı değilse hata fırlat.
    if(!response.ok){ //eğer istek yani cevap başarılı değilse..
        throw new Error("İstek başarılı değil") //hata fırlatma yani API'den cevap geliyo mu gelmiyor mu. Cevap gelmezse yani response ok gelmezse, yeni bir hata oluşturup görebiliyoruz ne olduğunu.
} 
//api'den gelen cevabı JSON formatına dönüştür ve geri dönder
return response.json() //eğer hata gelmezse de json yapısıyla direkt dışarı aktarıyoruz. 
} catch(error) {
        console.log(error)
    }
}
//fetchWeatherData fonksiyonunu diğer dosyalarda kullanılabilir hale getir. 
export default fetchWeatherData