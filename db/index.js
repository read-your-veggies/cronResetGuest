const mongoose = require('mongoose');

//connect to user db
const userDbConn = mongoose.createConnection(process.env.USERS_DATABASE_PATH);
userDbConn.on('error', function(err){
  if(err) throw err;
});
userDbConn.once('open', function callback () {
  console.info('connected to users db');
});

module.exports = { userDbConn };