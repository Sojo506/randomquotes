import {json} from "./quotes.js";

const text = document.querySelector("#text");
const author = document.querySelector("#author");
const btnQuote = document.querySelector("#new-quote");
const quoteBox = document.querySelector("#quote-box");
const tweetQuote = document.querySelector("#tweet-quote");
const bird = document.querySelector(".fa-twitter");

document.addEventListener("DOMContentLoaded", () => {
  generateQuote();
  generateColor();
});

btnQuote.addEventListener("click", generateQuote);

function generateQuote() {
  const quote = json[Math.floor(Math.random() * json.length)];

  text.textContent = quote[0];
  author.textContent = quote[1];
  tweetQuote.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?hashtags=quotes&related=Sojo5606&text="${quote[0]}" ${quote[1]}`
  );

  generateColor();
}

function generateColor() {
  const hex = "0123456789ABCDEF";
  let aux = "#";
  for (let i = 0; i < 6; i++) {
    aux += hex[Math.floor(Math.random() * 16)];
  }
  quoteBox.style.color = aux;
  document.body.style.backgroundColor = aux;
  tweetQuote.style.backgroundColor = aux;
}
