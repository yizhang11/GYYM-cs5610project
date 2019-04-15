module.exports=function (app) {

  require("./services/user.service.server")(app);
  require("./services/coach.service.server")(app);
  require("./services/admin.service.server")(app);
  require("./services/class.service.server")(app);

}
