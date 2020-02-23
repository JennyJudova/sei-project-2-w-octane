import { helper } from "@ember/component/helper";

export function formatGreeting(params /*, hash*/) {
  const now = Date.now();
  let date = new Date(now);
  date = JSON.stringify(date);
  let currentTime = parseInt("" + date[12] + date[13]);
  currentTime += 1;

  let greetingYou = "";

  if (currentTime >= 6 && currentTime < 12) {
    greetingYou = "Good Morning";
  } else if (currentTime >= 12 && currentTime < 18) {
    greetingYou = "Good Afternoon";
  } else if (currentTime >= 18) {
    greetingYou = "Good Evening";
  } else greetingYou = "Good Night ";

  const prettyArray = [
    "Munchkin",
    "Sausage",
    "Puppet",
    "Piglet",
    "Cookie",
    "Beautiful",
    "Pumpkin",
    "Little troll",
    "Little cabbage",
    "My flea",
    "Honey",
    "Cookie",
    "Darling"
  ];
  const pretty = prettyArray[Math.floor(Math.random() * prettyArray.length)];
  const prettyGreeting = `${greetingYou} ${pretty}`;
  return prettyGreeting;
}

export default helper(formatGreeting);
