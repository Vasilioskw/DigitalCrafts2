var request  = new XMLHttpRequest();
// Step 1: make the request = XMLHttpRequest
request.onreadystatechange = function () {
// Step 2: make the Var to request.onreadystatechange 
// and equal to a function
    console.log(this);
    // console.log(this.responseText)
    var data = JSON.parse(this.responseText)
    // Shorthand for: JSON.parse(this.responseText)
    // JSON.parse(this.responseText) is accesing the Object in Text
    var text = document.getElementById("text")
        // Shorthand for: document.getElementById("text").innerHTML
    text.innerHTML = data.country
    // Shorthand for: document.getElementById("text").innerHTML
    // The id = text element is being set equal to data.country
    console.log(data.country);
    // accessing data = JSON.parse(this.responseText).country
};
request.open("GET", 
"https://www.anapioficeandfire.com/api/books/1");
// Step 4: Var Request to .open and ("Get", "https:www.[...].com)
request.send();