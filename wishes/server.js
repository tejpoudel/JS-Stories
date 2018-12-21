var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "index" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "developer1",
    database: "wishes_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});


app.get("/", function (req, res) {
    connection.query("SELECT * FROM wishes;", function (err, data) {
        if(err) throw err;
        res.render("layouts/index", { wishes: data});
        console.log({wishes: data});
    });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO wishes (wish) VALUES (?)", [req.body.wish], function(err, resule) {
        if(err) throw err;
        res.redirect("/");
    });
});

app.listen(PORT, function () {
    console.log("Server is running on localhost: " + PORT);
});

