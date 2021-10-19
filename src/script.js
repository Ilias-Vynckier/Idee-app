// test
window.addEventListener('load', function () {
    console.log("Loaded.");
    YEfetch();

    if (!('Notification' in window)) {
        console.log("Notification are not supported by your browser.");
    }
    else {
        if (Notification.permission == "granted") {

            console.log("Permission granted before.");
        }
        else {
            if (Notification.permission !== "denied") {
                Notification.requestPermission()
                    .then(permission => {
                        if (permission == "granted") {
                            new Notification("Vives!");
                            console.log("Permission granted.");
                        }
                    });
            }
            else {
                console.log("Permission denied. No Notification will be send.");
            }
        }
    }
});

function YEfetch() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => containter(data));
}

function containter(data) {
    document.getElementById("YEdiv").innerHTML = data.quote;
}

document.addEventListener('click', function (event) {
    if (event.target.id == 'YE') {
        YEfetch();
    }
});

window.addEventListener('offline', (event) => {
    console.log("The network connection has been lost.");
  
    let data = {"quote":"Your offline. Please connect to the web"}
    containter(data);
});

window.addEventListener('online', (event) => {
    YEfetch();
});