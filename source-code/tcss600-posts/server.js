/********************************************************************************************************
* @Filename: server.js
* @Description: When the program is run, server.js is called at first. 
*               The file holds all the router information, like what is displayed for each of the routes.
*               This is a very simple application where the posts defined in database.json is displayed on to *               the browser. All the dependencies are mentioned in package.json.
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

// When the requests are made to /api/posts/in-thread/:threadId
// Displays all the posts pertaining to a specific thread
router.get('/api/posts/in-thread/:threadId', function *() {
  const id = parseInt(this.params.threadId);
  this.body = tcss600db.posts.filter((post) => post.thread == id);
});

// When the requests are made to /api/posts
// Displays all the posts
router.get('/api/posts', function *() {
  this.body = tcss600db.posts;
});

// When the requests are made to /api/posts/by-user/:userId
// Displays all the posts by a specific user - users are defined in tcss600-user project
router.get('/api/posts/by-user/:userId', function *() {
  const id = parseInt(this.params.userId);
  this.body = tcss600db.posts.filter((post) => post.user == id);
});

//When the /api route is accessed.
router.get('/api/', function *() {
  this.body = "API is ready to receive all the requests";
});

// When the home page is accessed.
router.get('/', function *() {
  this.body = "This is the Home Page! Append /api/posts with the url to see all the posts";
});

app.use(router.routes());
app.use(router.allowedMethods());

// The app listens on port 3000
// All the projects are later deployed onto AWS EKS and the ports are changed then
app.listen(3000);

console.log('POSTS started');
