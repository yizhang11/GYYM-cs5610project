module.exports = function (app) {

  const userModel = require('../model/user/user.model.server');
  const adminModel = require('../model/admin/admin.model.server');
  const coachModel = require('../model/coach/coach.model.server');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const FacebookStrategy = require('passport-facebook').Strategy;
  const bcrypt = require("bcrypt-nodejs");
  const multer = require('multer');
  const path = require('path');
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '/../../dist/gyym/assets/image/user')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
  const upload = multer({ storage: storage });

/*  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'name', 'emails', 'picture.type(large)']
  };*/
   const facebookConfig = {
       clientID: 2271207789606841,
       clientSecret: 'f04e90ee8793a11f1748b92af5e06985',
       callbackURL: '/auth/facebook/callback',
       profileFields: ['id', 'displayName', 'name', 'emails', 'picture.type(large)']
   };

  app.post("/api/user", createUser);
  app.get("/api/user", findAllUser);
  app.get("/api/user/:userId", findUserById);
  app.put("/api/user/:userId", updateUser);
  app.delete("/api/user/:userId", deleteUser);
  app.post('/api/logout', logout);
  app.post ('/api/register', register);
  app.get ('/api/loggedin', loggedin);
  app.post  ('/api/login', passport.authenticate('user-local'), login);
  app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {  successRedirect: '/#/user/profile/',  failureRedirect: '/#/login' }));
  app.post ("/api/upload", upload.single('myFile'), uploadImage);

  passport.serializeUser(userSerializeUser);
  passport.deserializeUser(userDeserializeUser);

  passport.use('user-local', new LocalStrategy(localStrategy));

  passport.use('facebook', new FacebookStrategy(facebookConfig, facebookStrategy));

  function userSerializeUser(user, done) {
    console.log('user serial');
    done(null, user);
  }

  function userDeserializeUser(user, done) {
    if (user.type == "admin") {
      console.log('instance of admin');
      adminModel
        .findAdminByName(user.username)
        .then(
          function(admin){
            done(null, admin);
          },
          function(err){
            done(err, null);
          }
        );
    } else if (user.type == "coach") {
      console.log('instance of coach');
      coachModel
        .findCoachByName(user.username)
        .then(
          function(coach){
            done(null, coach);
          },
          function(err){
            done(err, null);
          }
        );
    } else {
      console.log('instance of user');
      userModel
        .findUserById(user._id)
        .then(
          function(user){
            done(null, user);
          },
          function(err){
            done(err, null);
          }
        );
    }

  }

  function localStrategy(username, password, done) {
    console.log('user service local');
    userModel
      .findUserByUserName(username)
      .then(
        function(user) {
          console.log('user service found user');
          if(user && bcrypt.compareSync(password, user.password)) {
            console.log('user service password match');
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function(err) {
          if (err) { return done(err); }
        }
      );
  }

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel .findUserByFacebookId(profile.id).then( function(user) {
      if(user) {
        return user;
      } else {
        const names = profile.displayName.split(" ");
        console.log('facebook: ' + profile.photos);
        const newFacebookUser = {
          lastName: names[1],
          firstName: names[0],
          email: profile.emails ? profile.emails[0].value : "",
          photo_url: profile.photos ? profile.photos[0].value : "/assets/image/user/user1.jpeg",
          facebook: {
            id: profile.id,
            token: token
          },
          membership: "",
        };
        return userModel.createUser(newFacebookUser);
      }
    }, function(err) {
      if (err) { return done(err); }
    } ) .then(
      function(user){
        console.log('facebook: ' + user);
        try{
          return done(null, user);
        } catch (e) {
          console.log(e);
        }

      },
      function(err){
        if (err) { return done(err); }
      }
    );
  }

  function createUser(req, res) {
    let user = req.body;
    userModel
      .createUser(user)
      .then(
        function (user) {
          console.log("user created!");
          res.json(user);
        },
        function (error) {
          if (error) {console.log(error);
            res.status(400).send(error);
          }
        }
      )
  }

  function findUserById(req, res){
    let userId = req.params["userId"];
    userModel
      .findUserById(userId)
      .exec(
        function (err,user) {
          if(err){
            return res.status(400).send(err);
          }
          return  res.json(user);
        }
      );
  }

  function updateUser(req, res){
    let user = req.body;
    let userId = req.params["userId"];
    console.log('user server update' + user);
    userModel
      .updateUser(userId,user)
      .then(
        function (user) {
          console.log('user server updated');
          res.json(user);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }

  function deleteUser(req, res) {
    let userId = req.params["userId"];
    userModel
      .deleteUser(userId)
      .then(
        function (user) {
          console.log('user service delete: ' + user);
          res.json(user);
        },
        function (err) {
          res.status(400).send(err);
        }
      );
  }

  function loggedin(req, res) {
    let isAuthenticated = req.isAuthenticated();
    console.log('server loggedin authenticated: ' + isAuthenticated);
    let user = '0';
    if (isAuthenticated) {
      user = req.user;
    }
    console.log('server loggedin: ' + user);
    res.json(user);
  }

  function register (req, res) {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password);
    user.membership = '';
    user.photo_url = '/assets/image/user/user1.jpeg';
    userModel
      .createUser(user)
      .then(
        function(user){
          if(user){
            // console.log('server register: ' + user);
            req.login(user, function(err) {
              if(err) {
                res.status(400).send(err);
              } else {
                console.log('server register: ' + user);
                res.json(user);
              }
            });
          }
        }
      );
  }

  function login(req, res) {
    const user = req.user;
    console.log('user server login');
    res.json(user);
  }

  function logout(req, res) {req.logOut();} //res.send(200);}

  function findAllUser(req, res) {
    userModel
      .findAllUser()
      .exec(
        function (err,users) {
          if(err){
            return res.status(400).send(err);
          }
          return  res.json(users);
        }
      );
  }

  function uploadImage(req, res) {
    let userId = req.user._id;

    let width         = req.body.width;
    let myFile        = req.file;

    // let baseUrl = 'http://localhost:3200';
    // // let baseUrl = 'https://yi-assignment1.herokuapp.com';
    // const callbackUrl = baseUrl + "/website/" + websiteId
    //     + "/page/" + pageId + "/widget/" + widgetId;
    // console.log('widget server callbackUrl: ' + callbackUrl);
    if(myFile == null) {
      res.redirect('/#/user/profile');
      // res.redirect('back');
      return;
    }


    let originalname  = myFile.originalname; // file name on user's computer
    let filename      = myFile.filename;     // new file name in upload folder
    let path          = myFile.path;         // full path of uploaded file
    let destination   = myFile.destination;  // folder where file is saved to
    let size          = myFile.size;
    let mimetype      = myFile.mimetype;

    let url = '/assets/image/user/' + filename;
    console.log(url);

    userModel.findUserById(userId).then(
      function (user) {
        user.photo_url = url;
        userModel.updateUser(userId, user).then(function (widget) {
          console.log('user server updated url: ');
          // res.json(widget);
          res.redirect('/#/user/profile');
        });
      }
    );
    //

    // res.redirect('back');
  }

}
