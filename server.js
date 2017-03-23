const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const fs = require('fs');
require('dotenv').config()

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(favicon(path.join(__dirname, 'dist/images/favicons', 'favicon.ico')));
app.set('views', path.join(__dirname, 'dist'));

app.post('/signup', (req, res) => {
  const subscriberObj = req.body
  subscriberObj.type = 'active'

  const options = {
    uri: 'https://api.mailerlite.com/api/v2/groups/'+process.env.GROUP_ID+'/subscribers',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-MailerLite-ApiKey': process.env.API_KEY,
    },
    form: subscriberObj
  }

  request(options, (err, res, body) => {
    if (err) {
      const message = `${datetime}: ${err} \n`
      fs.writeFileSync('error.txt', message, {flag: 'a+'})
    }

    if (!err && res.statusCode == 200) {
      const response = JSON.parse(body)
      const message = `${response['date_created']}: name: ${response['name']} email: ${response['email']} \n`
      fs.writeFileSync('success.txt', message, {flag: 'a+'})
    }
  })
  res.json({success:true})
})

app.all('*', (req, res, next) => {
    res.sendFile('index.html', {
        root: __dirname + '/dist/'
    });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
