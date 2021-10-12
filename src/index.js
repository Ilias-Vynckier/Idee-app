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

  containter.innerHTML = Data();

  console.log("feest",Data())
  return containter;
}


document.body.appendChild(navbar());
document.body.appendChild(containter());


function component() {

  Notification.requestPermission(); //// notificatinos toestaan

  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  btn.innerHTML = "Click me and check the console!";
  btn.className = "btn js-push-btn mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect";
  btn.type = "button";

  element.appendChild(btn);

  return element;
}

document.getElementById("container").appendChild(component());
//document.body.appendChild(component());


function Data(data) {
  console.log("dink",data)
  return data;
}

fetch('https://opentdb.com/api.php?amount=1')
.then(response => response.json())
.then(data =>Data(data));