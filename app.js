const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'))
.use('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
