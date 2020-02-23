import Component from "@glimmer/component";
import fetch from "fetch";
import { tracked } from "@glimmer/tracking";

export default class QuoteComponent extends Component {
  @tracked
  quote = {};

  async quote() {
    const quote = await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    this.quote = quote.json();
    console.log("get quote");
    return this.quote;
  }

  // get quote() {
  //   const quote = fetch("https://uselessfacts.jsph.pl/random.json?language=en");
  //   this.quote = quote.json();
  //   console.log("get quote");
  //   return this.quote;
  // }
}

// get src() {
//   let { lng, lat, width, height, zoom } = this.args;

//   let coordinates = `${lng},${lat},${zoom}`;
//   let dimensions = `${width}x${height}`;
//   let accessToken = `access_token=${this.token}`;

//   return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
// }

// getFact() {
//   axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
//     .then(res => this.setState({ fact: res.data.text }))
//     .catch(err => this.setState({ error: err }))
// }

// async model() {
//   const tokenNews = ENV.newsAPI;
//   const country = "lv";
//   const quote = await fetch(
//     'https://uselessfacts.jsph.pl/random.json?language=en'
//   );
//   return quote.json();
// }
