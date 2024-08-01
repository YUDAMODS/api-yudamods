var express = require('express'),
  cors = require('cors'),
  secure = require('ssl-express-www');
const PORT = process.env.PORT || 3000 || 5000 || 8080;
var { color } = require('./lib/color.js');
//var mainrouter = require('./routes/main.js'),
  apirouter = require('./routes/api.js');

var app = express();
app.enable('trust proxy');
app.set("json spaces", 2);
app.use(cors());
app.use(secure);
app.use(express.static("lib"));
app.use(express.static("public")); // Menambahkan baris ini untuk melayani file statis dari folder public

//app.use('/', mainrouter);
app.use('/api', apirouter);
app.use(function (req, res, next) {
  res.sendFile(__dirname + '/public/index.html'); // Mengarahkan ke index.html
});

app.listen(PORT, () => {
  console.log(color("Server running on port " + PORT, 'green'));
});

module.exports = app;
