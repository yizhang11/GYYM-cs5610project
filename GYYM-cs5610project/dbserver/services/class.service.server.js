module.exports = function (app) {
  app.post("/api/coach/:coachId/class", createClass);
  app.get("/api/coach/:coachId/class", findAllClassesForCoach);
  app.get("/api/class/:classId", findClassById);
  app.get("/api/class", findAllClass);
  app.put("/api/class/:classId", updateClass);
  app.delete("/api/class/:classId", deleteClass);

  let classModel = require('../model/class/class.model.server');

  function createClass(req, res) {
    let newClass = req.body;
    let coachId = req.params.coachId;
    console.log(newClass);

    classModel.createClass(newClass._coach,newClass)
      .then(
        function (newClass) {
          console.log(newClass);
          res.json(newClass);
        },
        function (error) {
          res.status(400).send(error);
        }
      )
  }

  function findAllClassesForCoach(req, res) {
    let coachId = req.params.coachId;
    classModel.findAllClassesForCoach(coachId).then(
      function (websites) {
        console.log(websites);
        res.json(websites);
      },
      function (error) {
        res.status(400).send(error);
      }
    );
  }

  function findClassById(req, res) {
    let classId = req.params.classId;
    classModel.findClassById(classId)
      .then(
        function(newClass){
          res.json(newClass);
        },
        function (err) {
          res.status(400).send(err);
        }
      )
  }

  function updateClass(req, res) {
    let classId = req.params.classId;
    let newClass = req.body;

    classModel.updateClass(classId,newClass)
      .then(
        function (newClass) {
          res.json(newClass);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }

  function deleteClass(req, res) {
    let classId = req.params.classId;
    classModel.deleteClass(classId)
      .then(
        function (data) {
          res.json(data);
        },
        function (err) {
          res.status(400).send(err);

        }
      );
  }

  function findAllClass(req, res) {
    classModel.findAllClasses().then(
      function (classes) {
        console.log(classes);
        res.json(classes);
      },
      function (error) {
        res.status(400).send(error);
      }
    );
  }

}
