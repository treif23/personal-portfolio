const express = require('express'); 
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'));

//Below, we are setting the views directory to be ./views
//which lets the app know where to find the template files
//app.set('views', './views');

//Below, we are setting the default engine to be ejs
//note we do not need to require it, express will do that for us
//app.set('view engine', 'ejs');

//Now, instead of using res.send, we can use
//res.render to send the output of the template by filename
app.get('/', (req, res) => {
  const data = {
    person: {
      firstName: 'Tommy',
      lastName: 'Reif'
    }
  }
  res.render('index', data);
  res.status(200);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('listening at http://localhost:8080');
});

module.exports = app;