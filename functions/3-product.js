require('dotenv').config();
const Airtable = require('airtable-node');

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base('app4uYq3dbjHy3tDx')
  .table('products');

exports.handler = async (event, contex, cb) => {
  const { id } = event.queryStringParameters;
  if (id) {
    try {
      const product = await airtable.retrieve(id);
    } catch (error) {}
    return {
      statusCode: 200,
      body: 'Single Product',
    };
  }
  return {
    statusCode: 400,
    body: 'Please provide product id',
  };
};
