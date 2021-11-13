import _ from "lodash";
import "./style.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
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

function row() {
  const row = div();
  row.className = "row";
  row.id = "row";

  return row;
}

function col() {
  const col = div();
  col.className = "col";
  col.id = "col";

  return col;
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

  card.className = "card";
  card.id = "card";

  return card;
}

function cardbody() {
  const cardbody = div();

  cardbody.className = "card-body text-center";
  cardbody.id = "YEdiv"
  cardbody.innerHTML = "Your offline. Please connect to the web"

  return cardbody;
}

document.getElementById("container").append(row());
document.getElementById("row").append(col());
document.getElementById("col").append(card());
document.getElementById("card").append(cardbody());

function button() {
  const button = document.createElement("button");
  button.className = "btn btn-primary btn-lg";

  return button;
}


function YeButton() {
  const YeButton = button();
  YeButton.id = "YE";
  YeButton.innerHTML = "IDEA";

  return YeButton;
}

document.getElementById("col").append(YeButton());

function sidebtn() {
  const side = button();

  side.id = "side";
  side.type = "button";
  side.className = "position-fixed bottom-0 end-0 btn btn-primary"

  side.dataset.bsToggle = "offcanvas";
  side.dataset.bsTarget = "#offcanvasTop";
  side.setAttribute("aria-controls", "offcanvasTop");

  return side;
}

function gear() {
  const gear = document.createElement("i");
  gear.className = "bi bi-gear-wide";

  return gear;
}

document.getElementById("col").append(sidebtn());
document.getElementById("side").append(gear());



function offcanvas() {
  const ofv = div();
  ofv.className = "offcanvas offcanvas-start";
  ofv.id = "offcanvasTop";
  ofv.tabIndex = -1;
  ofv.setAttribute("aria-labelledby", "offcanvasTopLabel");
  return ofv;
}

function offcnvsHeader() {
  const ofvh = div();
  ofvh.className = "offcanvas-header";
  ofvh.id = "offcanvas-header";
  return ofvh;
}

function offTitle() {
  const title = document.createElement("h5");
  title.className = "offcanvas-title";
  title.id = "offcanvasLabel";
  title.innerHTML = "Push notifications";
  return title;
}

function offcnvsBody() {
  const ofvb = div();
  ofvb.className = "offcanvas-body";
  ofvb.id = "offcanvas-body";
  return ofvb;
}

function offcnvsclose() {
  const ofvcb = button();
  ofvcb.className = "btn-close text-reset";
  ofvcb.dataset.bsDismiss = "offcanvas";
  ofvcb.type = "button";
  ofvcb.setariaLabel = "Close";
  ofvcb.setAttribute("aria-label", "Close");

  return ofvcb;
}

function pushbtn() {
  const push = button();

  push.id = "push";
  push.innerHTML = "push";
  push.type = "button";

  return push;
}

function Name() {
  const name= div();

  name.className = "position-fixed bottom-0 start-0"
  name.innerHTML = "Made by Ilias Vynckier"

  return name;
}

document.body.append(offcanvas());
document.getElementById("offcanvasTop").append(offcnvsHeader());
document.getElementById("offcanvasTop").append(offcnvsBody());
document.getElementById("offcanvas-header").append(offTitle());
document.getElementById("offcanvas-header").append(offcnvsclose());
document.getElementById("offcanvas-body").append(pushbtn());
document.getElementById("offcanvas-body").append(Name());

////////////////////////////////// PUSH

'use strict';

const applicationServerPublicKey = 'BFO7xLiHzuFDLgO49TwPDA5IP9DMiAoa3T_zBkyMpN_wt5RbHBE6jGUvG0zfqSHOSxI7I5SvtAlxpzEHiyC27Kg';

const pushButton = document.querySelector('#push');

let isSubscribed = false;
let swRegistration = null;

function urlB64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function updateBtn() {
  if (Notification.permission === 'denied') {
    pushButton.textContent = 'Push Messaging Blocked.';
    pushButton.disabled = true;
    ////updateSubscriptionOnServer(null);
    return;
  }

  if (isSubscribed) {
    pushButton.textContent = 'Disable Push Messaging';
  } else {
    pushButton.textContent = 'Enable Push Messaging';
  }

  pushButton.disabled = false;
}

/*function //updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector('.js-subscription-json');
  const subscriptionDetails =
    document.querySelector('.js-subscription-details');

    
  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}*/

// TODO : settings pannel maken voor push notification

function subscribeUser() {
  const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
    .then(function (subscription) {
      console.log('User is subscribed.');
      console.log(subscription);

      //updateSubscriptionOnServer(subscription);

      isSubscribed = true;

      updateBtn();
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);
      updateBtn();
    });
}

function unsubscribeUser() {
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function (error) {
      console.log('Error unsubscribing', error);
    })
    .then(function () {
      //updateSubscriptionOnServer(null);

      console.log('User is unsubscribed.');
      isSubscribed = false;

      updateBtn();
    });
}

function initializeUI() {
  pushButton.addEventListener('click', function () {
    pushButton.disabled = true;
    if (isSubscribed) {
      unsubscribeUser();
    } else {
      subscribeUser();
    }
  });

  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
    .then(function (subscription) {
      isSubscribed = !(subscription === null);

      //updateSubscriptionOnServer(subscription);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
      }

      updateBtn();
    });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('sw.js')
    .then(function (swReg) {
      console.log('Service Worker is registered', swReg);

      swRegistration = swReg;
      initializeUI();
    })
    .catch(function (error) {
      console.error('Service Worker Error', error);
    });
} else {
  console.warn('Push messaging is not supported');
  pushButton.textContent = 'Push Not Supported';
}