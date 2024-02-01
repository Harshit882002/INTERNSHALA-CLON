const express = require("express");
const { homepage,
     currentUser,
     studentsignup,
     studentsignin ,
     studentsignout,
     studentsendmail,
     studentforgetlink,
     studentresetpassword,
     studentupdate,
     studentavatar, 
     applyinternship,
     applyjob
    } = require("../controllers/indexController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();


//GET ka "/" Route
router.get("/",  homepage);

//POST ka "/student" Route
router.get("/student", isAuthenticated, currentUser);


// Post ka /Student/signup Route
router.post("/student/signup", studentsignup  );


// Post ka /Student/signin Route
router.post("/student/signin", studentsignin  );

// GET ka /Student/signout Route
router.get("/student/signout", isAuthenticated, studentsignout);

// POST ka /Student/forget Route
router.post("/student/send-mail", studentsendmail);


// GET ka /Student/forget-link Route/:studentId
router.get("/student/forget-link/:id", isAuthenticated, studentforgetlink);

// POST ka /Student/reset-password/:studentId
router.post("/student/reset-password", isAuthenticated, studentresetpassword);

// POST ka /student/update/:studentId
router.post("/student/update/:id", isAuthenticated, studentupdate);


// POST ka /student/avatar/:studentId
router.post("/student/avatar/:id", isAuthenticated, studentavatar);

//-----------------------Apply-Internship------------------------

// POST ka /student/apply/internship/:internshipId
router.post("/student/apply/internship/:internshipid", isAuthenticated, applyinternship);


//-----------------------Apply-Job-------------------------------

// POST ka /student/apply/job/:jobId
router.post("/student/apply/job/:jobid", isAuthenticated, applyjob);


module.exports = router;