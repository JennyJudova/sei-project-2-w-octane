import { helper } from "@ember/component/helper";

export function formatTemp(params /*, hash*/) {
  const [temp] = params;
  return Math.round(temp - 273.15);
}

export default helper(formatTemp);
