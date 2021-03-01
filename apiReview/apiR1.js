var request = new XMLHttpRequest() 
// "request" is holding "new XMLHttpRequest()"
// new XMLHttpRequest() gets the API

request.onreadystatechange = function () {
    // "Ready state(s)" range from 1-4. We're console.logging the state
   // console.log(this)

    if (this.readyState === 4){
    // We do 3 equals(=) because we  want to make sure it's absolutly 
    // the number 4 and not a string - 4 is the final ready state

        console.log(this.responseText)
    // "this.responseText" is the info we want
        
        var responseText_to_object = JSON.parse(this.responseText)
    // turns the Responce text into a usable object!

        var ID_text = document.getElementById("text");
        // var "ID_text" is the <h3> tag we're working with on the HTML page

        ID_text.innerHTML = this.responseText
        // We're setting the ID "text" to the information from "this.responseText"

        console.log(responseText_to_object)
    }
};

request.open("GET", "https://www.anapioficeandfire.com/api/books")
//We're just pulling from the API
request.send()
// Sends it to the HTML PAGE!!
// ---> This is step one but MUST GO AFTER RELATED FUNCTIONS