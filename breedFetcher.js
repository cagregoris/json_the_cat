const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    ('error:', error);
    ('statusCode', response && response.statusCode);
    ('body', body);
    
    if (error) {
      callback(error, null);
    }
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed === undefined) {
      callback('Breed Not Found', null);
    } else {
      callback(null, breed.description);
    }
    
  });
};

module.exports = { fetchBreedDescription };