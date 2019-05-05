var dataSource = require(process.cwd() + "/server/server.js");
dataSource = dataSource.dataSources.app;
dataSource.autoupdate(function(err) {
  if (err) {
    console.log("err in autoupdate:: ", err);
  }
  process.exit();
});
