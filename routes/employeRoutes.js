const express = require("express");
const { homepage,
      currentEmploye,
      employesignup,
      employesignin ,
      employesignout,
      employesendmail,
      employeforgetlink,
      employeresetpassword,
      employeupdate,
      employeorganizationlogo,
      createinternship,
      readinternship,
      readsingleinternship,
      createjob,
      readjob,
      readsinglejob,
    } = require("../controllers/employeController");
const { isAuthenticated } = require("../middlewares/auth");
const router = express.Router();


//GET ka "/" Route
router.get("/",  homepage);

//POST ka "/employe" Route
router.post("/current", isAuthenticated, currentEmploye); 

// Post ka /emplye/signup Route
router.post("/signup", employesignup  );


// Post ka /emplye/signin Route
router.post("/signin", employesignin  );

// GET ka /emplye/signout Route
router.get("/signout", isAuthenticated, employesignout);

// POST ka /emplye/forget Route
router.post("/send-mail", employesendmail);


// GET ka /emplye/forget-link Route/:employeId
router.get("/forget-link/:id", isAuthenticated, employeforgetlink);

// POST ka /emplye/reset-password
router.post("/reset-password", isAuthenticated, employeresetpassword);

// POST ka /employe/update/:employeId
router.post("/update/:id", isAuthenticated, employeupdate);


// POST ka /employe/organizationlogo/:employeId
router.post("/organizationlogo/:id", isAuthenticated, employeorganizationlogo);

//-----------------Internship---------------------------

// POST ka /employe/internship/create
router.post("/internship/create", isAuthenticated, createinternship);

// POST ka /employe/internship/read
router.post("/internship/read", isAuthenticated, readinternship);


// POST ka /employe/internship/read/:id
router.post("/internship/read/:id", isAuthenticated, readsingleinternship);


//-----------------Job-------------------------------------------

// POST ka /employe/job/create
router.post("/job/create", isAuthenticated, createjob);

// POST ka /employe/job/read
router.post("/job/read", isAuthenticated, readjob);


// POST ka /employe/job/read/:id
router.post("/job/read/:id", isAuthenticated, readsinglejob);

module.exports = router;