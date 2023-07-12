const URL="https://api.openweathermap.org/data/2.5/weather?q=";

const apikey="&appid=9049190123ff0e909e7f92a059ac2c2e"

const form=document.getElementById("form");

const div=document.getElementById("container");

function removeElement(parent){
    while(parent.firstChild){
        parent.firstChild.remove()
    }
}

function getWeather(searchtext){

    axios.get(`${URL}${searchtext}${apikey}`).then((res)=>{
        const weather=res.data
        console.log(weather)
        //const di=document.createElement("div");
        const ul=document.createElement("ul");
        const li1=document.createElement("li");
        const li2=document.createElement("li");
        const li3=document.createElement("li");
        const li4=document.createElement("li");
        const li5=document.createElement("li");
        const li6=document.createElement("li");
        const li7=document.createElement("li");

        li3.append("Place Name: ");
        li3.append(weather.name);
        li1.append("Latitude: ");
        li1.append(weather.coord.lat);
        li2.append("Longitude: ");
        li2.append(weather.coord.lon);
        li4.append("Wind Speed: ");
        li4.append(weather.wind.speed);
        li5.append("Temperature: ");
        li5.append(weather.main.temp);
        li6.append("Pressure: ");
        li6.append(weather.main.pressure);
        li7.append("Sky Condition: ");
        li7.append(weather.weather[0].description)
        ul.append(li3);
        ul.append(li1);
        ul.append(li2);
        ul.append(li4);
        ul.append(li5);
        ul.append(li6);
        ul.append(li7);
       // di.append(ul)
        div.append(ul);
        //sec.append(div)
    })

}

form.addEventListener("submit",(e)=>{

    e.preventDefault()

    //console.log(form.children)
    const searchtext=form.children[3].value;

    removeElement(div);
    getWeather(searchtext);
    form.children[3].value="";

})