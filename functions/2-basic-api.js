const items = require('../assets/data');

exports.handler = async (event, contex, cb) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
