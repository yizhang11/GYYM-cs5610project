let mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
  username: String,
  password: String,
  type: String,
},{collection:'Admins'});

module.exports = adminSchema;
