import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class SearchComponent extends Component {
  @tracked
  city = "";

  get isDisabled() {
    return !this.city;
  }

  @action
  updateCity(event) {
    console.log("update city", event.target.value);
    this.city = event.target.value;
  }

  @action
  async handleSubmit() {
    console.log("handle submit", this.city);
    // @ts-ignore
    // await this.args.sendMessage(this.body);
    this.city = "";
  }
}
