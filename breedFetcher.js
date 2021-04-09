const commandLineInput = process.argv.slice(2);
const breedName = commandLineInput[0];

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  ('error', error);
  ('statusCode', response && response.statusCode);
  ('body', body);
  
  if (error) {
    console.log((`Failed to request details: ${error}`, error));
  }

  // 1. Find out what typw of the body is. The code below will return a string.
  //console.log(typeof body);
  
  // 2. Turn it into an object:
  const data = JSON.parse(body);
  

  //3. Print out the description
  const firstEntry = data[0];


  if (firstEntry === undefined) {
    console.log('Breed Not Found');
  } else {
    console.log(firstEntry.description);
  }
});