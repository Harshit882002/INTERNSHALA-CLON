const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { v4: uuidv4 } = require('uuid');

exports.resume = catchAsyncErrors(async(req, res, next) => {
    const { resume } = await Student.findById(req.id).exec();
    res.json({ message: "Secure Resume Page ! " , resume});
});

//-----------------------------------------Education-------------------------------------------------------

exports.addeducation = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.education.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Education Added ! "});
}); 

exports.editeducation = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const eduIndex = student.resume.education.findIndex(i => i.id === req.params.eduid);
    student.resume.education[eduIndex] = {...student.resume.education[eduIndex], ...req.body,};
    await student.save();
    res.json({ message: "Education Updated ! "});
});

exports.deleteeducation = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterededu = student.resume.education.filter((i) => i.id !== req.params.eduid);

    student.resume.education = filterededu;

    await student.save();

    res.json({ message: "Education Deleted   ! "});
});


//--------------------------------------Jobs----------------------------------------------------------


exports.addjobs = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.jobs.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Jobs Added ! "});
}); 

exports.editjobs = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const jobIndex = student.resume.jobs.findIndex(i => i.id === req.params.jobid);
    student.resume.jobs[jobIndex] = {...student.resume.jobs[jobIndex], ...req.body,};
    await student.save();
    res.json({ message: "Jobs Updated ! "});
});

exports.deletejobs = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterjob = student.resume.jobs.filter((i) => i.id !== req.params.jobid);

    student.resume.jobs = filterjob;

    await student.save();

    res.json({ message: "Jobs Deleted   ! "});
});


//--------------------------------------Internship---------------------------------------------------------


exports.addinternships = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.internships.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "internships Added ! "});
}); 

exports.editinternships = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const internshipIndex = student.resume.internships.findIndex(i => i.id === req.params.internid);
    student.resume.internships[internshipIndex] = {...student.resume.internships[internshipIndex], ...req.body,};
    await student.save();
    res.json({ message: "Internships Updated ! "});
});

exports.deleteinternships = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterinternships = student.resume.internships.filter((i) => i.id !== req.params.internid);

    student.resume.internships = filterinternships;

    await student.save();

    res.json({ message: "Internships Deleted   ! "});
});


//--------------------------------------Rsponsibility------------------------------------------------------


exports.addresponsibilities = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.responsibilities.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Responsibilities Added ! "});
});

exports.editresponsibilities = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const responsibilitiesIndex = student.resume.responsibilities.findIndex(i => i.id === req.params.responsid);
    student.resume.responsibilities[responsibilitiesIndex] = {...student.resume.responsibilities[responsibilitiesIndex], ...req.body,};
    await student.save();
    res.json({ message: "Responsibilities Updated ! "});
});

exports.deleteresponsibilities = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterresponsibilities = student.resume.responsibilities.filter((i) => i.id !== req.params.responsid);

    student.resume.responsibilities = filterresponsibilities;

    await student.save();

    res.json({ message: "Responsibilities Deleted   ! "});
});


//--------------------------------------Courses----------------------------------------------------------


exports.addcourses = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.courses.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Courses Added ! "});
});

exports.editcourses = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const coursesIndex = student.resume.courses.findIndex(i => i.id === req.params.coursid);
    student.resume.courses[coursesIndex] = {...student.resume.courses[coursesIndex], ...req.body,};
    await student.save();
    res.json({ message: "Courses Updated ! "});
});

exports.deletecourses = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filtercourses = student.resume.courses.filter((i) => i.id !== req.params.coursid);

    student.resume.courses = filtercourses;

    await student.save();

    res.json({ message: "Courses Deleted ! "});
});


//--------------------------------------Project----------------------------------------------------------


exports.addprojects = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.projects.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Projects Added ! "});
});

exports.editprojects = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const projectsIndex = student.resume.projects.findIndex(i => i.id === req.params.projectid);
    student.resume.projects[projectsIndex] = {...student.resume.projects[projectsIndex], ...req.body,};
    await student.save();
    res.json({ message: "Projects Updated ! "});
});

exports.deleteprojects = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterprojects = student.resume.projects.filter((i) => i.id !== req.params.projectid);

    student.resume.projects = filterprojects;

    await student.save();

    res.json({ message: "Projects Deleted ! "});
});


//--------------------------------------Skills----------------------------------------------------------


exports.addskills = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.skills.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Skills Added ! "});
});

exports.editskills = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const skillsIndex = student.resume.skills.findIndex(i => i.id === req.params.skillid);
    student.resume.skills[skillsIndex] = {...student.resume.skills[skillsIndex], ...req.body,};
    await student.save();
    res.json({ message: "Skills Updated ! "});
});

exports.deleteskills = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filterskills = student.resume.skills.filter((i) => i.id !== req.params.skillid);

    student.resume.skills = filterskills;

    await student.save();

    res.json({ message: "Skills Deleted ! "});
});


//--------------------------------------Accomplishments----------------------------------------------------


exports.addaccomplishments = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    student.resume.accomplishments.push({ ...req.body, id: uuidv4() });
    await student.save();
    res.json({ message: "Accomplishments Added ! "});
});

exports.editaccomplishments = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();
    const accomplishmentsIndex = student.resume.accomplishments.findIndex(i => i.id === req.params.accomplishmentid);
    student.resume.accomplishments[accomplishmentsIndex] = {...student.resume.accomplishments[accomplishmentsIndex], ...req.body,};
    await student.save();
    res.json({ message: "Accomplishments Updated ! "});
});


exports.deleteaccomplishments = catchAsyncErrors(async(req, res, next) => {   
    const student = await Student.findById(req.id).exec();

    const filteraccomplishments = student.resume.accomplishments.filter((i) => i.id !== req.params.accomplishmentid);

    student.resume.accomplishments = filteraccomplishments;

    await student.save();

    res.json({ message: "Accomplishments Deleted ! "});
});


//---------------------------------------------------------------------------------------------------------


