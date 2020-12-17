# Class 08: Lab
## Auth-API
### Aysia Brown

### Links & Resources
- [CI/CD](https://github.com/aysiabrown-401d39-advanced-javascript/bearer-auth/actions)
- [Backend Server](https://aysiab-auth-api.herokuapp.com/)
- [Code Fellows Frontend](https://javascript-401.netlify.app/)
    - *Note* for the front end provided by Code Fellows you will need to set the server url to your running localhost instance or the published backend url. 

### Setup
**`.env` variables**
- `PORT` = port number to host your server
    - Recommended use `3000`
- `MONGODB_URI` = the url to run your mongodb instance
- `SECRET` = your secret key used for your JSON Web Token (JWT)

**Installing Dependencies**
- run `npm i` within the cloned repo in your terminal to install package.json required dependencies 

**Initializing & Startup**
- run `nodemon` or `node index.js` to start the server from your cloned repo in your terminal
    - This will run a `http://localhost:PORT` locally on your machine
- run `mongo` in your terminal to access your database and collections
    - `show dbs` will show all of your databases within mongo 

**Tests**
- Use [Postman](https://www.postman.com/) to test manually routes.
    - - As of 12/16/20 8:00PM, all of the routes were responding correctly within Postman. 
- Full unit testing suite needs to be written
- Planning to have a test writing powwow session this weekend 12/18-12/20 for this and all other assignments missing tests! 
