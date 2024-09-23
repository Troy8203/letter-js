import piropos from "../utils/piropos.js";

const letter = document.querySelector(".letter-paper");

letter.addEventListener("click", () => {
  // Añade la clase 'active' al hacer clic
  letter.classList.add("active");
  letter.style.transform = "translateY(-200px)";
  setTimeout(() => {
    letter.style.transform = "translateY(-25px)";
  }, 500);
});

const params = new URLSearchParams(window.location.search);
const letterId = params.get("id");
console.log(`Esta es la carta con ID: ${letterId}`)

const letterText = document.querySelector(".letter-paper-text");
letterText.innerHTML = piropos[letterId].text;