const { schedule } = require("@netlify/functions");

const handler = async function () {
  console.log('calling func!');
  return {
    statusCode: 200,
  };
};

exports.handler = schedule("*/10 * * * *" , handler);