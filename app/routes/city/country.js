import Route from "@ember/routing/route";
import ENV from "jj-octane-template/config/environment";

export default class CityCountryRoute extends Route {
  async model() {
    const tokenNews = ENV.newsAPI;
    const country = "lv";
    const news = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${tokenNews}`
    );
    return news.json();
  }
}
