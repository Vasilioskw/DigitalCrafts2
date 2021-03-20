var mybutton1 = document.getElementById('press1')
var input1 = document.getElementById('search')

// ALL THE "VAR" LOGIC STUFF
var drinkcontainer = document.createElement("div")
    drinkcontainer.className = 'container'

    var aRow = document.createElement("div")
    aRow.className = 'row'
   //  document.body.appendChild(aRow)


    var aCol = document.createElement("div")
   //  document.body.appendChild(aCol)

    var drinkName = document.createElement("p")
    var photo = document.createElement("img")





// jokes
var mybutton2 = document.getElementById('press2')

mybutton2.addEventListener('click', function(event){
    event.preventDefault()
 fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
 .then((response) => {
     return response.json()
     })
.then((data) => {
    console.log(data)
         })
})
// jokes

mybutton1.addEventListener('click', function(event){
    event.preventDefault()
 console.log("The term searched for was " + input1);
 fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+input1.value)
 .then((response) => {
     return response.json()
     })
.then((data) => {
 console.log(data.drinks.length)
var drink_length = data.drinks.length 

    document.body.appendChild(drinkcontainer)

for (let i=0; i < drink_length; i++) {
    console.log(data.drinks[i])



if (i === 0 || i % 3 === 0) {
    document.body.appendChild(aRow)
    aRow = document.createElement("div")
    aRow.className = 'row'
    document.body.appendChild(aRow)

}
 /**
  * 1. EVERY ITERATION OF FOR LOOP, MAKE A NEW DRINK ELEMENT & NEW DRINK NAME ELEMENT
  * 2. MAKE A NEW COLOMN 
  * 3. ADD THE DRINK NAME & PICTURE TO THE NEW COLOMN
  * 4. ADD THE COLOMN TO THE ROW
  */

aCol = document.createElement("div")
aCol.className = 'col-sm'

drinkName = document.createElement("p")
drinkName.className = 'drinkcard'
drinkName.innerHTML = data.drinks[i].strDrink
aCol.appendChild(drinkName)

photo = document.createElement("img")
photo.className = 'drinkcard'
photo.src = data.drinks[i].strDrinkThumb
aCol.appendChild(photo)

aRow.appendChild(aCol)



}              
})
})
