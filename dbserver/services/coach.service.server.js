module.exports = function (app) {

  const coachModel = require('../model/coach/coach.model.server');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require("bcrypt-nodejs");

  app.post("/api/coach", createCoach);
  app.get("/api/coach", findAllCoach);
  app.get("/api/coach/:coachId", findCoachById);
  app.get("/api/coach/find/:cname", findCoachByName);
  app.put("/api/coach/:coachId", updateCoach);
  app.delete("/api/coach/:coachId", deleteCoach);
  app.post  ('/api/coach/login', passport.authenticate('coach-local'), login);
  app.get ('/api/coachloggedin', coachloggedin);

  //passport.serializeUser(serializeUser);
  //passport.deserializeUser(deserializeUser);

  passport.use('coach-local', new LocalStrategy(coachLocalStrategy));

  function serializeUser(coach, done) {
    done(null, coach);
  }

  function deserializeUser(coach, done) {

  }

  function coachLocalStrategy(username, password, done) {
    coachModel
      .findCoachByName(username)
      .then(
        function(coach) {
          if(coach && bcrypt.compareSync(password, coach.password)) {
            console.log('coach server password match');
            return done(null, coach);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function createCoach(req, res) {
    let coach = req.body;
    console.log('coach server creat:' + coach);
    coachModel
      .createCoach(coach)
      .then(
        function (coach) {
          console.log("coach created!");
          res.json(coach);
        },
        function (error) {
          if (error) {console.log(error);
            res.status(400).send(error);
          }
        }
      )
  }

  function findCoachById(req, res){
    let coachId = req.params["coachId"];
    coachModel
      .findCoachById(coachId)
      .exec(
        function (err,coach) {
          if(err){
            return res.status(400).send(err);
          }
          return  res.json(coach);
        }
      );
  }

  function findCoachByName(req, res){
    let cname = req.params["cname"];
    coachModel
      .findCoachByName(cname)
      .exec(
        function (err,coach) {
          if(err){
            return res.status(400).send(err);
          }
          return  res.json(coach);
        }
      );
  }

  function updateCoach(req, res){
    let coach = req.body;
    let coachId = req.params["coachId"];
    coach.password = bcrypt.hashSync(coach.password);
    console.log('coach server update' + coach);
    coachModel
      .updateCoach(coachId,coach)
      .then(
        function (coach) {
          console.log('coach server updated');
          res.json(coach);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }

  function deleteCoach(req, res) {
    let coachId = req.params["coachId"];
    coachModel
      .deleteCoach(coachId)
      .then(
        function (coach) {
          console.log('coach service delete: ' + coach);
          res.json(coach);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }


  function login(req, res) {
    const coach = req.user;
    res.json(coach);
  }

  function findAllCoach(req, res) {
    coachModel
      .findAllCoach()
      .exec(
        function (err,coaches) {
          if(err){
            return res.status(400).send(err);
          }
          return  res.json(coaches);
        }
      );
  }

  function coachloggedin(req, res) {
    let isAuthenticated = req.isAuthenticated();
    console.log('server loggedin authenticated: ' + isAuthenticated);
    let coach = '0';
    if (isAuthenticated) {
      const user = req.user;
      if (user instanceof coachModel) {
        coach = user;
      }
    }
    console.log('server loggedin: ' + coach);
    res.json(coach);
  }


}
