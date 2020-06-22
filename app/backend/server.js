const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const chalk = require('chalk'); // Styling output logs
const log = console.log;
const fs = require('fs');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

// Get port from .env file
const PORT = process.env.PORT || 2222;

// Middleware funcs
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

// Helper funcs
function readUserFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('app/data/users.json', (err, data) => {
      if (err) reject(err);
      const result = JSON.parse(data);
      resolve(result);
    });
  });
}

// Route
app.get('/users', (req, res) => {
  readUserFile().then((result) => {
    // Just to check readUserFile return what we're excepted
    // log(chalk.white.bgRed.bold(JSON.stringify(result, null, 2)));
    res.json(result);
  });
});

app.post('/users', (req, res) => {
  // init empty user object to hold new data with it .
  const user = {};
  const body = req.body;
  log(chalk.red.bgWhite.bold(' post new users '));
  // Read file then write new data in the same file with the same path -- Be carful here .
  readUserFile()
    .then((result) => {
      user['id'] = result.users.length + 1; // increase user beside the length of users array.
      Object.assign(user, body); // write new data that came from frontend to the locally user.
      result.users.push(user);
      // After assign and push user to users , send it to users.json file .
      fs.writeFile(
        'app/data/users.json',
        JSON.stringify(result, null, 2),
        (err) => {
          if (err) log(chalk.red.bgWhite.bold(err));
        }
      );
      // if data wrote successfully end connection and send some feedback .
      res.json({ message: 'success' }); // U can use redirect instead of json .
    })
    .catch((err) => log(chalk.red.bgWhite.bold(err)));
});

// DELETE user by id
app.delete('/user:id', (req, res) => {});
// Listener

app.listen(
  PORT,
  log(chalk.white.bgBlackBright.bold(' server running on ', PORT))
);
