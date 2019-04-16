let mongoose = require('mongoose');
let coachSchema = require('./coach.schema.server');

let coachModel = mongoose.model("Coach",coachSchema);


coachModel.createCoach = createCoach;
coachModel.findCoachById = findCoachById;
coachModel.findCoachByName = findCoachByName;
coachModel.findCoachByCredential = findCoachByCredential;
coachModel.updateCoach = updateCoach;
coachModel.deleteCoach = deleteCoach;
coachModel.findAllCoach = findAll;

module.exports = coachModel;

function createCoach(coach) {
  coach.photo_url = '/assets/image/trainer/trainer1.jpeg';
  console.log("model"+coach);
  return coachModel.create(coach);
}

function findCoachById(id) {
  return coachModel.findById(id);
}

function findCoachByName(username) {
  return coachModel.findOne({username:username});
}

function findCoachByCredential(username,password){
  return coachModel.findOne({username:username,password:password});
}

function updateCoach(coachId,coach) {
  console.log('coach model update: ' + JSON.stringify(coach));
  delete coach._id;
  return coachModel.findOneAndUpdate({_id: coachId},coach);
}

function deleteCoach(coachId){
  return coachModel.findByIdAndRemove(coachId).then(function (coach) {
    console.log('coach model delete: ' + JSON.stringify(coach));
    return user;
  });
}

function findAll() {
  return coachModel.find({});
}
