require("dotenv").config({path: './.env'})
const express = require("express");
const app = express();
// const PORT = 3030;

const cors = require('cors');

// Use CORS middleware

const crosOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST" , "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
}

app.use(cors(crosOptions))


// DataBase Connection
require("./models/database").connectDatabase();


//logger
const logger = require("morgan");


app.use(logger("tiny"));

// bodyparser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// session and cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(session({
   resave: true,
   saveUninitialized: true,
   secret: process.env.EXPRESS_SESSION_SECRET
}));

app.use(cookieparser());

// express file-upload
const fileupload = require("express-fileupload");
app.use(fileupload()); 

//routes
app.use("/user", require("./routes/indexRoutes"));
app.use("/resume", require("./routes/resumeRoutes"));
app.use("/employe", require("./routes/employeRoutes"));
   

// Error Handling 
const ErrorHandler = require("./utils/ErrorHandler");
const {genetatedErrors} = require("./middlewares/errors");

 app.all("*", function(req, res, next) {
    next(new ErrorHandler(`Requested URL Not Found ${req.url}`, 404));
 });
 app.use(genetatedErrors);


 app.listen(process.env.PORT,
     console.log(`Server running on port ${process.env.PORT}`));