const userDbConn = require('./db/index.js').userDbConn;
const Users = userDbConn.collection('users');

exports.handler = () => {
  Users.findOneAndUpdate({name: "Guesty McGuestFace"}, { $set: {onboard_information: "NEED_ON_BOARDING", completed_articles: "{}"}});
}