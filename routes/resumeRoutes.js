const express = require("express");
const router = express.Router();

const { 
    resume,
    
//--------------------------

    addeducation,
    editeducation,
    deleteeducation,


//--------------------------

    addjobs,
    editjobs,
    deletejobs,

//--------------------------

    addinternships,
    editinternships,
    deleteinternships,

//--------------------------


    addresponsibilities,
    editresponsibilities,
    deleteresponsibilities,

//--------------------------

    addcourses,
    editcourses,
    deletecourses,

//--------------------------

    addprojects,
    editprojects,
    deleteprojects,

//--------------------------


    addskills,
    editskills,
    deleteskills,

//--------------------------


    addaccomplishments,
    editaccomplishments,
    deleteaccomplishments

//--------------------------
    
} = require("../controllers/resumeController");

const { isAuthenticated } = require("../middlewares/auth");

//GET ka "/" Route
router.get("/", isAuthenticated, resume);

//--------------------------------------Education----------------------------------------------------------


// POST ka "/addeducation" Route
router.post("/add-edu", isAuthenticated, addeducation);

// POST ka "/editeducation/:editId" Route
router.post("/edit-edu/:eduid", isAuthenticated, editeducation);

// POST ka "/deleteeducation/:editId" Route
router.post("/delete-edu/:eduid", isAuthenticated, deleteeducation);

//--------------------------------------Jobs----------------------------------------------------------

// POST ka "/addedjobs" Route
router.post("/add-jobs", isAuthenticated, addjobs);

// POST ka "/editjobs/:editId" Route
router.post("/edit-jobs/:jobid", isAuthenticated, editjobs);

// POST ka "/deletejobs/:editId" Route
router.post("/delete-jobs/:jobid", isAuthenticated, deletejobs);

//--------------------------------------Internship----------------------------------------------------------


// POST ka "/addinternships" Route
router.post("/add-internships", isAuthenticated, addinternships);

// POST ka "/editinternships/:editId" Route
router.post("/edit-internships/:internid", isAuthenticated, editinternships);

// POST ka "/deleteinternships/:editId" Route
router.post("/delete-internships/:internid", isAuthenticated, deleteinternships);


//--------------------------------------Responsibility-----------------------------------------------------


// POST ka "/addresponsibilities" Route
router.post("/add-responsibilities", isAuthenticated, addresponsibilities);

// POST ka "/editresponsibilities" Route
router.post("/edit-responsibilities/:responsid", isAuthenticated, editresponsibilities);

// POST ka "/deleteresponsibilities/:editId" Route
router.post("/delete-responsibilities/:responsid", isAuthenticated, deleteresponsibilities);


//--------------------------------------Courses----------------------------------------------------------


// POST ka "/addcourses" Route
router.post("/add-courses", isAuthenticated, addcourses);

// POST ka "/editcourses" Route
router.post("/edit-courses/:coursid", isAuthenticated, editcourses);

// POST ka "/deletecourses/:editId" Route
router.post("/delete-courses/:coursid", isAuthenticated, deletecourses);


//--------------------------------------Project----------------------------------------------------------


// POST ka "/addprojects" Route
router.post("/add-projects", isAuthenticated, addprojects);

// POST ka "/editprojects" Route
router.post("/edit-projects/:projectid", isAuthenticated, editprojects);

// POST ka "/deleteprojects/:editId" Route
router.post("/delete-projects/:projectid", isAuthenticated, deleteprojects);


//--------------------------------------Skills----------------------------------------------------------


// POST ka "/addskills" Route
router.post("/add-skills", isAuthenticated, addskills);

// POST ka "/editskills" Route
router.post("/edit-skills/:skillid", isAuthenticated, editskills);

// POST ka "/deleteskills/:editId" Route
router.post("/delete-skills/:skillid", isAuthenticated, deleteskills);


//--------------------------------------Accomlishments-----------------------------------------------------


// POST ka "/addaccomplishments" Route
router.post("/add-accomplishments", isAuthenticated, addaccomplishments);

// POST ka "/editaccomplishments/:editid" Route
router.post("/edit-accomplishments/:accomplishmentid", isAuthenticated, editaccomplishments);

// POST ka "/deleteaccomplishments/:editId" Route
router.post("/delete-accomplishments/:accomplishmentid", isAuthenticated, deleteaccomplishments);


//---------------------------------------------------------------------------------------------------------
module.exports = router;

