const button = document.getElementById("generate");
const quoteContent = document.getElementById("quotes");
const author = document.getElementById("author");
const body = document.querySelector("body");

const color = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"]

const getQuote = async () => {
    const data = await fetch("https://api.quotable.io/random");
    const quotes = await data.json();

    quoteContent.innerHTML = ("<q>" + quotes.content + "</q>");
    author.innerHTML = ("- " + quotes.author);
}

const changeColor = () => {
    var randomColor = Math.floor(Math.random() * color.length);
    quoteContent.style.color = color[randomColor];
    author.style.color = color[randomColor];
    button.style.backgroundColor = color[randomColor];
    body.style.backgroundColor = color[randomColor];
}

button.addEventListener("click", () => {
    changeColor();
    getQuote();
});
