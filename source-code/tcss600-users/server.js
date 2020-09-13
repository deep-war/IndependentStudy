/********************************************************************************************************
* @Filename: server.js
* @Description: When the program is run, server.js is called at first. 
*               The file holds all the router information, like what is displayed for each of the routes.
*               This is a very simple application where the users defined in database.json is displayed on to *               the browser. All the dependencies are mentioned in package.json.
* @Author: Deepthi Warrier Edakunni
* @Date:10-June-2020
********************************************************************************************************/
// Importing all the requried libraries & files
const app = require('koa')();
const router = require('koa-router')();
const tcss600db = require('./database.json');

// Logs all the requests
app.use(function *(next){
  const startDate = new Date;
  yield next;
  const ms = new Date - startDate;
  console.log('%s %s - %s', this.method, this.url, ms);
});

// When the requests are made to /api/users - Displays details of all users
router.get('/api/users', function *(next) {
  this.body = tcss600db.users;
});

// When the requests are made to /api/users/{specific userid} for e.g.:/api/users/1
// Displays details pertaining to the specific userid
router.get('/api/users/:userId', function *(next) {
  const id = parseInt(this.params.userId);
  this.body = tcss600db.users.find((user) => user.id == id);
});

//When the /api route is accessed.
router.get('/api/', function *() {
  this.body = "API is ready to receive all the requests";
});

// When the home page is accessed.
router.get('/', function *() {
  this.body = "This is the Home Page! Append /api/users with the url to see all the users";
});

app.use(router.routes());
app.use(router.allowedMethods());

// The app listens on port 3000
app.listen(3000);

console.log('USERS started');
