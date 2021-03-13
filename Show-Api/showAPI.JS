




function GetShow() {
fetch("http://api.tvmaze.com/search/shows?q=is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-sword-oratoria") 
    .then((response) => {
    // console.log(response)
    return response.json()
    })
    .then((data) => {
        console.log(data)
        // return data
        })
}

GetShow()
