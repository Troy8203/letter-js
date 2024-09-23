// Definir las rutas
const routes = {
  "/letter/:id": "<h1>Redirigiendo...</h1>",
};

import piropos from "../utils/piropos.js";

function handleRouteChange() {
  const path = window.location.pathname;
  const routeKeys = Object.keys(routes);
  let content = "Página no encontrada";

  for (const route of routeKeys) {
    const dynamicParamMatchLetter = route.match(/\/letter\/:id$/);

    if (dynamicParamMatchLetter && path.startsWith(route.replace("/:id", ""))) {
      const letterId = path.split("/")[2];
      window.location.href = `/letter.html?id=${letterId}`;
      return;
    }
  }
  //document.getElementById("content").innerHTML = content;
}

function navigateTo(url) {
  history.pushState({}, "", url);
  handleRouteChange();
}

function generateLetter() {
  const links = document.querySelector(".letter-paper-link");
  const button = document.querySelector(".letter-paper-button-top");

  links.classList.remove("disable");
  button.classList.add("disable");

  const randomIndex = Math.floor(Math.random() * piropos.length);
  console.log(randomIndex);

  const letterLink = "localhost:5173/letter.html?id=" + randomIndex;
  const inputText = document.querySelector(".letter-paper-link input");
  inputText.value = letterLink;
}

function navigate() {
  const url = document.querySelector(".letter-paper-link input").value;
  const parts = url.split("/");
  navigateTo("/letter/" + parts[parts.length - 1]);
}

function copy() {
  const text = document.querySelector(".letter-paper-link input").value;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text was copied: " + text);
    })
    .catch((err) => {
      console.error("Error to copy: ", err);
    });
}

window.copy = copy;
window.navigate = navigate;
window.navigateTo = navigateTo;
window.generateLetter = generateLetter;

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("popstate", handleRouteChange);
  handleRouteChange();
});
