//Require installed packages
const express = require ("express");
const mongoose = require ("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;


//Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Serve up static assets 
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Add routes, both API and view
app.use(require('./routes/index'))

//Connect to Mongo DB
mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost/googlebooks');

//Start API Server 
app.listen(PORT, function() {
    console.log(`Listening on PORT ${PORT}`);
});