const express= require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Got a POST request')
})
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});