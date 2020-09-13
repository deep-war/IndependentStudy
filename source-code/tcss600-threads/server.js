/********************************************************************************************************
* @Filename: server.js
* @Description: When the program is run, server.js is called at first. 
*               The file holds all the router information, like what is displayed for each of the routes.
*               This is a very simple application where the threads defined in database.json is
*                displayed on to the browser. All the dependencies are mentioned in package.json.
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

// When the requests are made to /api/threads
// Displays all the threads
router.get('/api/threads', function *() {
  this.body = tcss600db.threads;
});

// When the requests are made to /api/threads/:threadId
// Displays all the threads pertaining to a specific threadId
router.get('/api/threads/:threadId', function *() {
  const id = parseInt(this.params.threadId);
  this.body = tcss600db.threads.find((thread) => thread.id == id);
});

//When the /api route is accessed.
router.get('/api/', function *() {
  this.body = "API is ready to receive all the requests";
});

// When the home page is accessed.
router.get('/', function *() {
  this.body = "This is the Home Page! Append /api/threads with the url to see all the threads";
});

app.use(router.routes());
app.use(router.allowedMethods());

// The app listens on port 3000
// All the projects are later deployed onto AWS EKS and the ports are changed then
app.listen(3000);

console.log('THREADS started');
