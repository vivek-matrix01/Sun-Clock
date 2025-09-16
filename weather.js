


const APIKEY=`cff6c5c8683a4ea793395558251509`;
const userInput=document.getElementById('userInput');

let baseurl=`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=&aqi=yes`;



async function fetchWeatherData(url) {
       try{
           const response = await fetch(url);

           if(response.ok){
               
               const data = await response.json();
               console.log("Weather data fetched successfully:", data);
               const city=data.location.name;
               const state=data.location.region;
               const country=data.location.country;
               console.log(`Location: ${city}, ${state}, ${country}`);
               const airquality=data.current.air_quality['us-epa-index'];
               const temp_c=data.current.temp_c;
               const  condition=data.current.condition.text;
               dateandtime=data.location.localtime;
              startAnimation(dateandtime,city,state,country,temp_c,condition,airquality);
               
           }

           else{
               throw new Error("Error in fetching weather data ...");
           }

       }
       catch(error){
           console.log("Error fetching weather data ...","Error:",error)
       }
       
   }



function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                const latitude=position.coords.latitude;
                const longitude=position.coords.longitude;
                //calling for weather 
               
                getWeatherByLocator(latitude,longitude);
            })

    }
    else {
        console.log("navigator not supported by browser .");

        //calling for manual location update..
        
    }
}



userInput.innerHTML=`<input type="text" id="location" placeholder="Enter your country name"/> <button onclick="getWeatherByCity()">Get Weather</button>`;

function getWeatherByLocator(latitude,longitude){

     const query=`${baseurl.replace('q=','q='+latitude+','+longitude)}`
    fetchWeatherData(query)

}



function getWeatherByCity(){
    const location=document.getElementById('location').value.trim();
    
    if(location===''){
        alert("Please enter a valid city name ...");
        return;
    }
    
    query=`${baseurl.replace('q=','q='+location)}`;
    fetchWeatherData(query);
}



getLocation();