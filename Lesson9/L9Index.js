
var MyObject = {
1: "one",
2: "two", 
3: "three",
}


localStorage.setItem(MyObject.name, JSON.stringify(MyObject))

var promise = new Promise((success, failure) => {
    var object = localStorage.getItem(MyObject)
    if (MyObject) {
        console.log(MyObject)
    } else {
        console.log("oh no!")
    }
    })