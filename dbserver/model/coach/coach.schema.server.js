let mongoose = require('mongoose');
let classSchema = require('../class/class.schema.server')

let coachSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  type: String,
  expertise: String,
  brief: String,
  photo_url: String,
  classes: [classSchema],
  dateCreated: {type: Date, default: Date.now()},
},{collection:'Coaches'});

module.exports = coachSchema;
