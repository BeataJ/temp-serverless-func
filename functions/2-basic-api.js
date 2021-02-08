const items = require('../assets/data');

exports.handler = async (event, contex, cb) => {
  return {
    headers: {
      'Access-Control-Allow-Orgin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
