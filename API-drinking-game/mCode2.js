var addDrink = (data) => {
    var drinkVariations = data.drinks.length
    console.log(data)


// Vasili
    document.body.appendChild(drinkcontainer);
// Vasili

    

    for (let i = 0; i < drinkVariations; i++) {
        console.log(data.drinks[i]);

        if (i === 0 || i % 3 === 0) {
            document.body.appendChild(aRow);
            aRow = document.createElement("div");
            aRow.className = "row";
      
          for (let i = 0; i < drinkVariations; i++) {
            var drinkCardDiv = document.createElement('div')
            
            //   drinkCardDiv.className = 'drinkcard'
            //   var drinkName = document.createElement('h5')
            //   // drinkName.className = 'drinkcard'
            //   drinkName.innerHTML = data.drinks[i].strDrink
            //   drinkCardDiv.appendChild(drinkName)
            //   var photo = document.createElement('img')
            //   // photo.className = 'drinkcard'
            //   photo.src = data.drinks[i].strDrinkThumb
            //   drinkCardDiv.appendChild(photo)
      
          }
      }


        var drinkCardDiv = document.createElement('div')
        drinkCardDiv.className = 'drinkcard'
        var drinkName = document.createElement('h5')
        // drinkName.className = 'drinkcard'
        drinkName.innerHTML = data.drinks[i].strDrink
        drinkCardDiv.appendChild(drinkName)
        var photo = document.createElement('img')
        // photo.className = 'drinkcard'
        photo.src = data.drinks[i].strDrinkThumb
        drinkCardDiv.appendChild(photo)
        
        for (let j = 0; j < 16; j++) {
            let measure = '';
            if (data.drinks[i]['strMeasure' + j]) {
                measure = (data.drinks[i]['strMeasure' + j])
            }
            if ((data.drinks[i]['strIngredient' + j])) {
                var ingredients = document.createElement('p')
                ingredients.innerHTML = `${measure} ${data.drinks[i][`strIngredient${j}`]}`
                drinkCardDiv.appendChild(ingredients)
            }
        }
        document.body.appendChild(drinkCardDiv)

    }
}



      