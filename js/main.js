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

let weatherUrl = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/352249?res=3hourly&key=d551ff99-fcc9-4c95-bc77-521d080a9549"

getJSON(weatherUrl, (callback) => {
    console.log(callback)
    console.log(callback.SiteRep.DV.Location.Period[0].Rep[0])
})