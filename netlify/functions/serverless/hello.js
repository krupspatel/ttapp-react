/* eslint-disable no-unused-vars */
//  this is a test function for netlify serverless functions:

// eslint-disable-next-line no-undef
exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
  };
};
