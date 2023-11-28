const mongoose = require("mongoose");
const eventScheme = require("../models/event");

const Event = mongoose.model("Event", eventScheme);

module.exports = Event;
