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
    this.city = event.target.value;
    console.log(this.city);
  }

  @action
  async handleSubmit() {
    console.log(this.city);
    // @ts-ignore
    // await this.args.sendMessage(this.body);
    this.city = "";
  }
}
