$(document).ready(() => {
    console.log("JQuery is ready")
})

const $container = $('<div>')

const $title = $('<h1>', {
    text: 'Dad Jokes'
})

$container.append($title)        
$(document.body).append($container)

$title.css('color', 'blue')

// $title.addClass('css-class')

const $jokeButton = $('<button>',{
    text: "Click for a joke"
})

$jokeButton.appendTo($container)
// $container.append($jokeButton) Could use this

$jokeButton.on('click', event => {
    getJoke()
    .then(joke => {
        $('.joke').remove()
        console.log(joke)
        // const $jokeText = $('<p>', {
        //     text: joke
        // })
        // $jokeText.addClass('joke')
        // $jokeText.appendTo($container)
        $('<p>', {
            text: joke
        })
        .addClass('joke')
        .hide()
        .appendTo($container)
        // .slideDown()
        .fadeIn()
    })
})

function getJoke() {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => {
        return response.joke
    })
    .catch(err => {
        return err
    })
}

//We moved this up to the event listener
// getJoke()
// .then(joke => {
//     console.log(joke)
// })

function searchJoke(term) {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/search?term=' + term,
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => {
        return response.results.map(result => result.joke)
        // console.log(response)
    })
    .catch(err => {
        return err
    })
}

// searchJoke("dad")

const $jokeForm = $('<form>')
const $jokeInput = $('<input>', {
    placeholder : 'Enter search here'
})
const $submitButton = $('<input>', {
    type: "submit",
    value: "Search"
})

$jokeForm
    .append($jokeInput)
    .append($submitButton)
    .appendTo(document.body)
    .on('submit', event => {
        event.preventDefault();
        const $searchTerm = $jokeInput.val()
        console.log($searchTerm)
        searchJoke($searchTerm)
        .then(jokesArray => {
            console.log(jokesArray)
            $(jokesArray).each((index, joke) =>{
                console.log(joke) 
                $('<p>', {
                    text: joke
                })
                .appendTo(document.body)   
                .on('click', event => {
                    console.log(event)
                    $(event.target).remove();
                })         
            })
        }) 
    })