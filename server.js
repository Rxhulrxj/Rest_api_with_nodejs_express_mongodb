const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

// set up our express app
const app = express();

// connect to mongodb
mongoose.connect(
  "mongodb+srv://<Username>:<password>@cluster0.zip3izl.mongodb.net/?retryWrites=true&w=majority"
);
mongoose.Promise = global.Promise;

app.use(express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// initialize routes
app.use("/api", routes);

// error handling middleware
//we use next to tell express that we are done with the middleware and we want to move on to the next middleware
//if we don't call next, the error will be thrown and the app will crash
app.use(function (err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});

// listen for requests
app.listen(4000, function () {
  console.log("Ready to Go!");
});
