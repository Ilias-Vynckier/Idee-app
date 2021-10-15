fetch('https://api.kanye.rest/')
.then(response => response.json())
.then(data => containter(data));


function containter(data) {
    document.getElementById("container").innerHTML=data.quote;
}