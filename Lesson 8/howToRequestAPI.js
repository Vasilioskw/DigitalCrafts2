var request  = new XMLHttpRequest();
// Step 1: make the request = XMLHttpRequest
request.onreadystatechange = function () {
// Step 2: make the Var to request.onreadystatechange 
// and equal to a function
    // console.log(this);
    console.log(this.responseText)
    var data = JSON.parse(this.responseText)
    var text = document.getElementById("text")
    text.innerHTML = this.responseText
    console.log(data.country);
};
request.open("GET", 
"https://www.anapioficeandfire.com/api/books");
// Step 4: Var Request to .open and ("Get", "https:www.[...].com)
 

request.send();