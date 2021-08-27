import React from "react";
import "./App.css";
import Form from "./app_component/form.component";
import Weather from "./app_component/weather.component";
import "bootstrap/dist/css/bootstrap.min.css";

// git project https://github.com/erikflowers/weather-icons
import "weather-icons/css/weather-icons.css";

const Api_Key = "e89e579581f6da84833d873cbf66577d";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: null,
      temp_min: null,
      description: "",
      error: false
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }
  
  calFarenheit(temp) {
    let cell = Math.floor((temp - 273.15)*1.8+32);
    return cell;
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }



  getWeather = async e => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}, ${country}&appid=${Api_Key}`
      );

      const response = await api_call.json();

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        main: response.weather[0].main,
        celsius: this.calFarenheit(response.main.temp),
        temp_max: this.calFarenheit(response.main.temp_max),
        temp_min: this.calFarenheit(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });

      // seting icons
      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

      console.log(response);
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          statename={this.state}
          weatherIcon={this.state.icon}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}


function changeBg(){
  const images= [
  'url("https://images6.alphacoders.com/363/363733.jpg")',//rainy static
' url("https://i.pinimg.com/originals/72/a8/21/72a821a47acadbf0614e091dd5d06ed7.jpg")', //sunny static
' url("https://cdn.lowgif.com/full/11f23e804ce7dc06-gif-rain-sun-nature-autumn-cozy-spring-rain-gif-rainy-we.gif")', //rain gif plants sunny
' url("https://64.media.tumblr.com/7085fb769cdc8a25f97bad54b3b2590d/tumblr_onolpwAneY1vomjnuo1_500.gifv")', //rain gif bokeh
' url("https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/blurred-background-forest-snow-winter-kichigin.jpg")',//snowy static
' url("https://images.unsplash.com/photo-1558975934-3852951edd25?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")',//cloudy evening
' url("https://cdn.wallpapersafari.com/76/28/yXlGhQ.gif")', //clouds gif
' url("https://img.wattpad.com/bfe824f830b9fc411c9f900c592afea58a38b98b/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f66505a74776b4c4c5672724251773d3d2d313031313336353237352e313636616439643564623830346231313433303435303536323333362e676966")', //snow night
' url("https://c.tenor.com/LMStKSxadRgAAAAC/stars-night.gif")'
]

const section = document.querySelector('body')
const bg = images[Math.floor(Math.random() * images.length)];
section.style.backgroundImage =bg;
}

setInterval(changeBg, 10000)


export default App;