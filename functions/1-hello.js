// domain/.netlify/functions/1-hello
// const person = { name: 'john' };

exports.handler = async (event, contex, cb) => {
  return {
    statusCode: 200,
    body: 'Our First Netlify Function',
  };
};
