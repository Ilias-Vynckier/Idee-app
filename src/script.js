
YEfetch();

function YEfetch() {
    fetch('https://api.kanye.rest/')
        .then(response => response.json())
        .then(data => containter(data));
}

function containter(data) {
    document.getElementById("YEdiv").innerHTML = data.quote;
}

document.addEventListener('click',function(event){
  
    if(event.target.id=='YE'){
        YEfetch();
    }
});