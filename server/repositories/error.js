const mongoose = require("mongoose");
const errorScheme = require("../models/error");

const Error = mongoose.model("Error", errorScheme);

module.exports = Error;
