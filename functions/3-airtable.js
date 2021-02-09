exports.handler = async (event, contex, cb) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: 'Aittable Example',
  };
};
