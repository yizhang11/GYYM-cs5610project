let mongoose = require('mongoose');

let classSchema = mongoose.Schema({
    _coach: {type: mongoose.Schema.ObjectId, ref: "Coach"},
    name: String,
    description: String,
    location: String,
    approved: Boolean,
    time: String,
    weather: String,
    coachName: String,
    coachUrl: String,
    dateCreate:{type: Date, default: Date.now()}
  },{collection: "Classes"}
);

module.exports = classSchema;
