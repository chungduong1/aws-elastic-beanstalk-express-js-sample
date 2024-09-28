const request = require('http');

const options = {
  hostname: 'localhost',
  port: 8080,
  path: '/',
  method: 'GET',
};

// Make a GET request to the Express app
const req = request(options, (res) => {
  let data = '';

  // Collect response data
  res.on('data', (chunk) => {
    data += chunk;
  });

  // On response end, check the output
  res.on('end', () => {
    console.log('Response:', data);
    if (data === 'Hello World!') {
      console.log('Test passed!');
    } else {
      console.error('Test failed: Response did not match');
      process.exit(1); // Exit with an error if the test fails
    }
  });
});

// Handle errors
req.on('error', (error) => {
  console.error('Error:', error);
  process.exit(1); // Exit with an error if the request fails
});

// End the request
req.end();
