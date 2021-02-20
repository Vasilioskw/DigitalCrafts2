var API_KEY = object.API_KEY


var addPoster = (data) => {
    console.log(data)
    var poster = document.createElement("img")
    poster.src = data.Poster
    console.log(poster)
    document.body.appendChild(poster)
}

fetch("http://www.omdbapi.com/?apikey="+API_KEY+"&t=Dogs")
.then (reply => reply.json())
.then(reply => addPoster(reply))