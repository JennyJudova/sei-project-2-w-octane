import Component from "@glimmer/component";
import fetch from "fetch";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class QuoteComponent extends Component {
  @tracked
  quote = {};

  @action
  async getQuote() {
    const quote = await await fetch(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    this.quote = quote.json();
    console.log("get quote");
    return this.quote;
  }
}

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
