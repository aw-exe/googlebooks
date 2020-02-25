//Require installed packages
const express = require ("express");
const mongoose = require ("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;


//Define middleware here
app.use(express.urlencode({ extended: true }));
app.use(express.json());

//Serve up static assets 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Add routes, both API and view
require('./routes/api-routes')(app);

//Connect to Mongo DB
mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://user:password123@ds063180.mlab.com:63180/heroku_pmwf7300');

//Start API Server 
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});