import Route from "@ember/routing/route";
import fetch from "fetch";
import ENV from "jj-octane-template/config/environment";

export default class CityRoute extends Route {
  async model() {
    const token = ENV.weatherAPI;
    const { cityId } = this.paramsFor("city");
    // const city = "London";
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=${token}`
    ); // works but takes a ton of time (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
    return weather.json();
  }
}
