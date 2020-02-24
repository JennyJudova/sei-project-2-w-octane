import { helper } from "@ember/component/helper";

export function filterArticles(params /*, hash*/) {
  const [articles] = params;
  console.log(articles);
  const art = articles.filter((artice, index) => index < 5);
  console.log(art);
  return art;
}

export default helper(filterArticles);
