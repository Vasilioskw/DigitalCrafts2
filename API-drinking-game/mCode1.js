var mybutton1 = document.getElementById('press1')
var input1 = document.getElementById('search')

// ALL THE "VAR" LOGIC STUFF
var drinkcontainer = document.createElement("div")
    drinkcontainer.className = 'container'

    var aRow = document.createElement("div")
    aRow.className = 'row'

    ////////////////


    var aCol = document.createElement("div")
   

// mybutton1.addEventListener('click', function(event){
//     event.preventDefault()
//  console.log("The term searched for was " + input1);
//  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+input1.value)
//  .then((response) => {
//      return response.json()
//      })
// .then((data) => {
//  console.log(data.drinks.length)
// var drink_length = data.drinks.length 

//     document.body.appendChild(drinkcontainer)
mybutton1.addEventListener("click", function (event) {
    event.preventDefault();
    var drinkName = document.getElementById("search").value;
    console.log(drinkName);
    var replaced = drinkName.split(' ').join('+');
    // console.log(replaced);
    var addDrink = (data) => {
        var drink_length = data.drinks.length 
        console.log(data)

    var drinkCardDiv = document.createElement('div')
    drinkCardDiv.className = 'drinkcard'
    var photo = document.createElement('img')
    var drinkName = document.createElement('h5')
    drinkName.className = 'responsive';

        ///////////////////////////// Vasili's code
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
        

    ///////////////////// Myrriame's code
    for (let k = 0; k < drink_length; k++) {
           
  
            aCol.appendChild(drinkCardDiv)
            photo.className = 'responsive';
            photo.src = data.drinks[k].strDrinkThumb
            drinkCardDiv.appendChild(photo)
           
            drinkName.innerHTML = data.drinks[k].strDrink
            drinkCardDiv.appendChild(drinkName)
            for (let j = 0; j < 16; j++) {
                let measure = '';
                if (data.drinks[i]['strMeasure' + j]) {
                    measure = (data.drinks[k]['strMeasure' + j])
                }
                if ((data.drinks[i]['strIngredient' + j])) {
                    var ingredients = document.createElement('p')
                    ingredients.innerHTML = `${measure} ${data.drinks[i][`strIngredient${j}`]}`
                    ingredients.className = 'responsive'
                    drinkCardDiv.appendChild(ingredients)
                }
            }
            // drinkbox.appendChild(drinkCardDiv)
        }
    }
}
})
    ///////////////////// Myrriame's code



    //     ///////////////////////////// Vasili's code

    // for (let l=0; l < drink_length; i++) {
    //     console.log(data.drinks[i])

    //     drinkName = document.createElement("p")
    //     drinkName.className = 'drinkcard'
    //     drinkName.innerHTML = data.drinks[i].strDrink
    //     aCol.appendChild(drinkName)
        
    //     photo = document.createElement("img")
    //     photo.className = 'drinkcard'
    //     photo.src = data.drinks[i].strDrinkThumb
    //     aCol.appendChild(photo)
        
    //     aRow.appendChild(aCol)



    //     ///////////////////////////// Vasili's code
    // })
// })



       
    // fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + replaced)
    //     // .then(reply => console.log(reply)) used to check status
    //     .then(reply => reply.json())
    //     // .then(data => console.log(data)) to get url info
    //     .then(data => addDrink(data))
    //     // unable to get .catch to work
    //     .catch(err => console.log('No drink found'))
   





//////////////////////////////


// // RON SQAWNSON JOKES
// button = document.getElementById('quotecard')
// button.addEventListener("click", function (event) {
//     event.preventDefault();
//     var addQuote = (data) => {
//         var pQuote = document.getElementById('quote')
//         console.log(data)
//         pQuote.innerHTML = data[0]
//     }
//     fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
//         // .then(reply => console.log(reply)) used to check status
//         .then(reply => reply.json())
//         // .then(data => console.log(data)) to get url info
//         .then(data => addQuote(data))
//         // unable to get .catch to work
//         .catch(err => console.log('No drink found'))
// });
// // RON SQAWNSON JOKES




// function rotateFunction() {
//     var min = 1024;
//     var max = 9999;
//     var deg = Math.floor(Math.random() * (max - min)) + min;
//     document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
//     var element = document.getElementById('mainbox');
//     element.classList.remove('animate');
//     setTimeout(function () {
//         element.classList.add('animate');
//     }, }


