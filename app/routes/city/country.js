import Route from "@ember/routing/route";
import fetch from "fetch";
import ENV from "jj-octane-template/config/environment";

export default class CityCountryRoute extends Route {
  async model() {
    const tokenNews = ENV.newsAPI;
    const { countryId } = this.paramsFor("city.country");
    const country = "lv";
    const news = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryId}&apiKey=${tokenNews}`
    );
    return news.json();
  }
}
