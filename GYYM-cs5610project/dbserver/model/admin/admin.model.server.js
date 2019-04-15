let mongoose = require('mongoose');
let adminSchema = require('./admin.schema.server');

let adminModel = mongoose.model("Admin",adminSchema);


adminModel.createAdmin = createAdmin;
adminModel.findAdminByName = findAdminByName;

module.exports = adminModel;


function createAdmin(admin) {
  console.log("model"+JSON.stringify(admin));
  return adminModel.create(admin);
}

function findAdminByName(username) {
  return adminModel.findOne({username:username});
}
