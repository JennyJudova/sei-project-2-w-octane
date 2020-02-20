import Route from "@ember/routing/route";

export default class CityRoute extends Route {
  async model() {
    const token = "ec1164d2d65b85bad589802965922278";
    const city = "London";
    const weather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`
    ); // works but takes a ton of time (`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
    return weather.json();
  }
}
