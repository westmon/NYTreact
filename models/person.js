const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = new Schema({
	name: String,
	email: String,
	zip: Number,
	date: { 
		type: Date, 
		default: Date.now 
	}
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
