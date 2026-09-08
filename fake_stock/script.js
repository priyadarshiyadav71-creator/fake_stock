import { getStockData } from "./fakeStockData.js";

const triangle = document.querySelector(".material-symbols-outlined")

setInterval(()=> {
    const stockData = getStockData()
    renderDetails(stockData)
}, 1500);

let oldPrice = null

function renderDetails(stockData) {
    const Name = document.getElementById("company-name");
    const Symbol = document.getElementById("company-symbol");
    const Price = document.getElementById("company-price");
    const Time = document.getElementById("company-time");

    if (stockData.price > oldPrice) {
        triangle.classList.remove("downward")
        triangle.classList.add("upward")
    }
    else if (stockData.price < oldPrice) {
        triangle.classList.add("downward")
        triangle.classList.remove("upward")
    }
    else {
        triangle.classList.remove("downward")
        triangle.classList.remove("upward")
    }

    Name.textContent = `Name: ${stockData.name}`;
    Symbol.textContent = `Symbol: ${stockData.symbol}`;
    Price.textContent = `Price: $${stockData.price}`;
    Time.textContent = `Time: ${stockData.time}`;

    oldPrice = stockData.price
}

