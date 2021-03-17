var mybutton1 = document.getElementById('press1')


const input1 = document.getElementById('query1')

mybutton1.addEventListener('click', function(event){
    event.preventDefault()
 console.log("The term searched for was " + input1.value);
 fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+input1.value)
 .then((response) => {
     return response.json()
     })
.then((data) => {
    // console.log(data.drinks.length)
    var drink_length = data.drinks.length
for (let i=0; i < drink_length; i++) {
    console.log(data.drinks[i])
            }
         })
})




var mybutton2 = document.getElementById('press2')

mybutton2.addEventListener('click', function(event){
    event.preventDefault()
 fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
 .then((response) => {
     return response.json()
     })
.then((data) => {
    console.log(data)

         // return data
         })
})




