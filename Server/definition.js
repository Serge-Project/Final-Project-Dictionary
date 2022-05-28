import axios from 'axios'
// import { contentType, json } from 'express/lib/response';




const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method)

        const options = {
        method: 'GET',
        url: 'https://wordsapiv1.p.rapidapi.com/words/baton/definitions',
        headers: {
          'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com',
          'X-RapidAPI-Key': '60ecddf193msh8f2f879fa15da0ep145c16jsnae3ae7a9451e'
        }
      };
      axios.request(options)
      .then(function(response) {
        r = response.data
        var result = JSON.stringify(r)
        res.setHeader('content-Type', 'text/json')
        res.write(result)
        res.end()
      })
      .catch(function (error) {
        console.error(error);
      });
    
})

server.listen(3000, 'localhost', () => {
    console.log('listening to request on port 3000')
})