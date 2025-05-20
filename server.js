// function callback(){
//     console.log('"Details added Succesfully"');
// }

// const add = function(a, b, callback){
//     var result = a=b;
//     console.log('result:' +result);
//     callback();
// }

// add(3, 1, callback)

// const add = function(a,b, prince){
//     var result =a+b;
//     console.log('result:' +result);
//     (prince);
// }

// add (45, 5, function(){

// });

// var fs = require('fs')
// var os = require('os')

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt', 'Hello ' +user.username+ '!\n', ()=>{
//     console.log('file is created')
// })

// console.log(os);

// const notes = require('./notes.js');
// var_ = require('loadash');

// var age = notes.age;
// var result = notes.addNumber(age+18, 2);
// console.log(age);
// console.log('result is now ' +result).

const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person");
const MenuItem = require("./models/MenuItem")

app.get("/", function (req, res) {
  res.send("Hello");
});

app.get("/veg", (req, res) => {
  res.send("Sure sir/mam, I would love to serve veg food to our customer");
});

app.get("/Dosa", (req, res) => {
  res.send("Sure");
});

app.get("/idli", (req, res) => {
  const customisedIdli = {
    name: "Rava Idli",
    size: "10 cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(customisedIdli);
});


//Get method to get the person


// Import the router files

const personRoutes = require('./routes/personRoutes')
const menuItemsRoutes = require('./routes/menuItemRoutes');


//use the router
app.use('/person', personRoutes);
app.use('/menu', menuItemsRoutes);




app.listen(3000, () => {
  console.log("Listening on port 3000");
});
