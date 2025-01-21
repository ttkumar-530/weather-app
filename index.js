const form=document.getElementById("form");
const latitudeInput=document.getElementById("latitude");
const longitudeInput=document.getElementById("longitude");
const resultContainer=document.getElementById("result");
const aqiresult=document.getElementById("aqi");
const coresult=document.getElementById("co");
const no2result=document.getElementById("no2");
const pm25result=document.getElementById("pm25");
const o3result=document.getElementById("o3");
const pm10result=document.getElementById("pm10");
const so2result=document.getElementById("so2");

form.addEventListener("submit",(event)=>
{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    //console.log(latitude);
    //console.log(longitude);
    const url = `https://air-quality.p.rapidapi.com/current/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e9ea96708amsh102e97b7131bb86p17a175jsn03325899b8b0',
		'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	}};
    
    fetch(url,options)
     .then(response=>response.json())
     .then(result=>
     {
        let reading = result.data[0];
        console.log(reading);
        aqiresult.textContent=reading.aqi;
        coresult.textContent=reading.co;
        no2result.textContent=reading.no2;
        pm25result.textContent=reading.pm25;
        o3result.textContent=reading.o3;
        pm10result.textContent=reading.pm10;
        so2result.textContent=reading.so2;
        resultContainer.style.display="block";
     });
});