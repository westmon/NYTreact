const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Person = require("./models/person.js");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
app.use(express.static("client/build"));

// Use apiRoutes
app.use("/api", apiRoutes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/NYTimes",
	{
		useMongoClient: true
	}
);

app.post("/save", function(req, res) {
	// as long as req.body matches what the model expects, this should insert into the database
	Person.create(req.body)
		.then(() => {
			res.json(true);
		})
		.catch((err) => {
			// if not, we can at least catch the error
			res.json(error);
		});
});

// Start the API server
app.listen(PORT, function() {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
