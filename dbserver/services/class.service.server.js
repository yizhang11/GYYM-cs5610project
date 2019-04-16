module.exports = function (app) {
  app.post("/api/coach/:coachId/class", createClass);
  app.get("/api/coach/:coachId/class", findAllClassesForCoach);
  app.get("/api/class/:classId", findClassById);
  app.get("/api/class", findAllClass);
  app.put("/api/class/:classId", updateClass);
  app.delete("/api/class/:classId", deleteClass);
  app.get("/api/weather/:time", getWeather);

  let classModel = require('../model/class/class.model.server');
  const https = require('https');

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

  function getWeather(req, res) {
    const map = new Map([
      ["clear-day", "01d"],
      ["clear-night", "01n"],
      ["partly-cloudy-day", "02d"],
      ["partly-cloudy-night", "02n"],
      ["cloudy", "03d"],
      ["rain", "09d"],
      ["sleet", "13d"],
      ["snow", "13d"],
      ["wind", "50d"],
    ]);
    let time = req.params['time'];
    time += ":00";
    console.log('class server time:' + time);
    let iconNum = '03d';
    const apiUrl = "https://api.darksky.net/forecast/51c6f2db5bccf1a6480cbcd267e15f4a/47.631,-122.347,";
    // + time
    https.get(apiUrl + time + "?exclude=hourly,minutely,daily,flags", (call) => {
      //console.log('res message:' + res.);

      call.on('data', (d) => {
        // console.log('data:' + d);
        const weather = JSON.parse(d);
        const icon = weather.currently.icon;
        iconNum = map.get(icon);
        console.log('weather:' + iconNum);
        res.json("http://openweathermap.org/img/w/" + iconNum + ".png");
      });
    });
    // Http.send();
    // Http.onreadystatechange=(e)=>{
    //   console.log(Http.responseText);
    //   const weather = Http.responseText;
    //   //const icon = weather.daily.data.icon;
    //   //console.log('weather icon: ' + icon);
    //   //
    //
    // }
    //console.log('res for iconNum: ' + iconNum);
    //res.json("http://openweathermap.org/img/w/" + "02d" + ".png");
  }

}
