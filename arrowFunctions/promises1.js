var add = (x, y) => {return x + y};

var promise1 = new Promise((resolve, reject) => {
    let answer = add(2, 3);

    if (answer == 5){
        resolve(answer)
    } else {
        reject(console.log("no"))
    }
});

promise1.then(michael => michael)
promise1.then(response => console.log(response));

function setPicture(link) {
    console.log(link);
    var image = document.getElementById("picture").src = link
    

}


fetch('https://dog.ceo/api/breeds/image/random')
    .then(result => result.json())
    .then(data => setPicture(data.message))

console.log("async");