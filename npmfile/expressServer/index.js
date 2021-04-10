const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

const server = http.createServer(app);
const db = require('./db');


app.get('/',(req, res) => {
res.send("hello express")
});

app.get('/friends', (req, res) => {
    let htmlData = `<ul>`;
    for (let friend of db) {
        htmlData += `<li>
                        <a href="${req.path}/${friend.name}">${friend.name}</a>
                    </li>`;
    }
    htmlData += `</ul>`;
    res.send(htmlData);
});


app.get('/friends/:name', (req, res) => {
    console.log(req.params.name);
    var {name} = req.params;
    var friend = db.find(thisFriend => thisFriend.name === name);
    console.log(friend);

    let htmlData =``;
    htmlData += `<h1>${friend.name}</h1>`;
    htmlData += `<h1>${friend.skill}</h1>`;
    htmlData += `<h1>${friend.handle}</h1>`;
  
    res.send(htmlData);

//     } else {
// res.status(404)
//         .send("No friend with that name found")
//         }
});




server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});