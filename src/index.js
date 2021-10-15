import _ from "lodash";
import "./style.css";
//import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//const port = process.env.PORT || 3000


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}


function navbar() {
  const nav = document.createElement("nav");
  const navtext = document.createElement("span");

  nav.className = "navbar navbar-dark bg-primary";
  navtext.className = "container";
  navtext.innerHTML = "dink";

  nav.appendChild(navtext);

  return nav;
}

function containter() {
  const containter = document.createElement("div");
  containter.className = "container";
  containter.id = "container";
  return containter;
}





document.body.appendChild(navbar());
document.body.appendChild(containter());

function div() {
  const div = document.createElement("div");
  div.id = "div";
  div.className = "card"

  return div
}

function card() {
  const card = div();

  card.className="card";
  card.id="card";

  return card;
}

function cardbody() {
  const cardbody = div();

  cardbody.className="card-body";
  cardbody.id="YEdiv"

  return cardbody;
}


document.getElementById("container").append(card());
document.getElementById("card").append(cardbody())



function button() {
  const button = document.createElement("button");
  button.id = "YE";
  button.innerHTML = "YE";

  return button;
}

document.getElementById("container").append(button());