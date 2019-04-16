let mongoose = require('mongoose');
let classSchema = require('./class.schema.server');

let classModel = mongoose.model("Class",classSchema);
let coachModel = require('../coach/coach.model.server');


classModel.createClass = createClass;
classModel.findAllClassesForCoach = findAllClassesForCoach;
classModel.findClassById = findClassById;
classModel.updateClass = updateClass;
classModel.deleteClass = deleteClass;
classModel.findAllClasses = findAll;

module.exports = classModel;

function createClass(coachId, newClass) {
  newClass._coach = coachId;
  return classModel.create(newClass)
    .then(
      function (newClass) {
        coachModel.findUserById(coachId)
          .then(
            function (coach) {
              console.log('class model create: coach' + JSON.stringify(coach));
              coach.classes.push(newClass);
              coachModel.updateCoach(coachId,coach);
              coach.save();
              newClass.save();
            }
          );
        return newClass;
      }
    )
}

function findAllClassesForCoach(coachId) {
  return classModel.find({_coach:coachId});
}

function findClassById(id) {
  return classModel.findById(id);
}

function updateClass(id,newClass) {
  return classModel.findByIdAndUpdate(id,newClass);
}

function deleteClass(id){
  return classModel.findByIdAndRemove(id);
}

function findAll() {
  return classModel.find({});
}
