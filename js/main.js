//function to make get request using AJAX
var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

//weather tile variables
let weatherUrl = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/352249?res=3hourly&key=d551ff99-fcc9-4c95-bc77-521d080a9549"
let weatherCodes = ['Clear night','Sunny day','Partly cloudy (night)','Partly cloudy (day)','Not used','Mist','Fog','Cloudy','Overcast','Light rain shower (night)','Light rain shower (day)','Drizzle','Light rain','Heavy rain shower (night)','Heavy rain shower (day)','Drizzle','Light rain','Heavy rain shower (night)','Heavy rain shower (day)','Heavy rain','Sleet shower (night)','Sleet shower (day)','Sleet','Hail shower (night)','Hail shower (day)','Hail','Light snow shower (night)','Light snow shower (day)','Light snow','Heavy snow shower (night)','Heavy snow shower (day)','Heavy snow','Thunder shower (night)','Thunder shower (day)','Thunder']
let temp = document.getElementById("FLT")
let weatherType = document.getElementById("WT")


// sends get request to get the data needed
getJSON(weatherUrl, (callback) => {
    console.log(callback)
    let data = callback.SiteRep.DV.Location.Period[0].Rep[0]
    temp.innerHTML += data.T + "c"
    weatherType.innerHTML += weatherCodes[data.W] 
})


//Quote Tile variables
let quoteUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&key=3&lang=en"
let author = document.getElementById("author")
let quote = document.getElementById("quote")

//get request made to url and gets data
getJSON(quoteUrl, (callback)=>{
    console.log(callback)

    author.innerHTML = callback.quoteAuthor
    quote.innerHTML = callback.quoteText
})

var iframe = window.parent.document.getElementById("cal")
iframe.style.height = "100%"
iframe.style.width = "100%"

