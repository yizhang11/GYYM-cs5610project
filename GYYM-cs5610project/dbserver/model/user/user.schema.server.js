let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  membership: String,
  photo_url: String,
  dateCreated: {type: Date, default: Date.now()},
  facebook: { id: String,  token: String }
},{collection:'Users'});

module.exports = userSchema;
