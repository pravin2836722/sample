const express = require('express')
var request = require('request');
var moment = require('moment');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    request('https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=96b3b64205c5d8886214e73bec5b182f', function(error, response, body) {
        var number = new Date().getDay();
        if (number > 1) {

            // looping through 2 to number-1
            for (let i = 2; i < number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        
            if (isPrime) {
                res.send(JSON.parse(body))
            } else {
                console.log("Date is not prime so no date");
            }
        }
        
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})