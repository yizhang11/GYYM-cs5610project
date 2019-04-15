module.exports = function (app) {

  const adminModel = require('../model/admin/admin.model.server');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const bcrypt = require("bcrypt-nodejs");

  app.get ('/api/admin/loggedin', adminloggedin);
  app.post  ('/api/admin/login', passport.authenticate('admin-local'), adminLogin);

  //passport.serializeUser(adminSerializeUser);
  //passport.deserializeUser(adminDeserializeUser);

  passport.use('admin-local',new LocalStrategy(adminLocalStrategy));

  function adminSerializeUser(admin, done) {
    console.log('admin serial');
    done(null, admin);
  }

  function adminDeserializeUser(admin, done) {
    console.log('admin deserial');

  }

  function adminLocalStrategy(username, password, done) {
    adminModel
      .findAdminByName(username)
      .then(
        function(admin) {
          if(admin && password === admin.password) {
            console.log('admin password match');
            return done(null, admin);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function adminloggedin(req, res) {
    let isAuthenticated = req.isAuthenticated();
    console.log('server loggedin authenticated: ' + isAuthenticated);
    let admin = '0';
    console.log('admin loggedin: ' + req.user);
    if (isAuthenticated) {
      const user = req.user;
      if (user instanceof adminModel) {
        admin = user;
      }
    }
    console.log('server loggedin: ' + admin);
    res.json(admin);
  }

  function adminLogin(req, res) {
    const admin = req.user;
    let isAuthenticated = req.isAuthenticated();
    console.log('server login authenticated: ' + isAuthenticated);
    console.log('admin server: ' + admin);
    res.json(admin);
  }

}
