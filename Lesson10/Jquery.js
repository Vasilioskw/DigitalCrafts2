$(document).ready(() => {
    console.log('jQuery is ready to go!');
});


const $container = $('<div>');
const $title = $('<h1>', {
    text: 'Dad Jokes'
});

$container.append($title);
$(document.body).append($container);
$title.css('color', 'tomato');

const $jokeButton = $('<button></button>', {
    text: 'Click for a new joke 😂'
})
$jokeButton.appendTo($container);

$jokeButton.on('click', event => {
getJoke()
.then(joke => {
    $('.joke').remove()
    console.log(joke)
    const $jokeText = $('<p>', {
        text: joke
})

function getJoke() {
    return $.ajax({
        url: 'https://icanhazdadjoke.com/',
        headers: {
            'Accept': 'application/json'        
        }
    }).then(res => {
        return res.joke;
    }).catch(err => {
        console.log(err);
        return 'There was an error making the reqeuest';
    });
}

getJoke()
    .then(joke => {
        console.log(joke)
    })