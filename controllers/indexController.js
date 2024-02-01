const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
// const ErrorHandler = require("./utils/ErrorHandler");
const Internship = require("../models/internshipModel")
const Job = require("../models/jobModel")
const Student = require("../models/studentModel");
const ErrorHandler = require("../utils/ErrorHandler");
const { sendtoken } = require("../utils/SendToken");
const { sendmail } = require("../utils/nodemailer");
const path = require("path");
const imagekit = require("../utils/imagekit").initImageKit();


exports.homepage = catchAsyncErrors(async (req, res, next) => {
        res.json({ message: "Secure Homepage ! " });
});

exports.currentUser = catchAsyncErrors(async (req, res, next) => {
        const student = await Student.findById(req.id).exec();
        res.json( student );
});

exports.studentsignup = catchAsyncErrors(async (req, res, next) => {
        //       res.json(req.body);
        const student = await new Student(req.body).save();
        // res.status(201).json(student);
        sendtoken(student, 201, res);
});


exports.studentsignin = catchAsyncErrors(async (req, res, next) => {
//        res .json(req.body);
          const student = await Student.findOne({
                email:req.body.email
          }).select("+password").exec();

          if(!student) return next(new ErrorHandler("User not found with this email adress", 404));

          const isMatch = student.comparepassword(req.body.password);
          if(!isMatch) return next(new ErrorHandler("Wrong Credientials", 500));

        //   res.json(student);  
          sendtoken(student, 200, res);
          
          
});

exports.studentsignout = catchAsyncErrors(async (req, res, next) => {
        res.clearCookie("token");
        res.json({message: "Successfully signout ! "});
}); 


exports.studentsendmail = catchAsyncErrors(async (req, res, next) => {
        const student = await Student.findOne({email: req.body.email}).exec();

        if(!student) return next(new ErrorHandler("User not found with this email address", 404));

        const url = `${req.protocol}://${req.get("host")}/student/forget-link/${student._id}`;

        sendmail(req,res,next,url);

        student.resetPasswordToken = "1";
        await student.save();

        // res.json({ message: "Route Working ! " });
           res.json({ student, url });
});



exports.studentforgetlink = catchAsyncErrors(async (req, res, next) => {

        const student = await Student.findById (req.params.id).exec();

        if(!student) return next(new ErrorHandler("User not found with this email address", 404));

        if(student.resetPasswordToken === "1"){
                student.resetPasswordToken = "0";
                student.password = req.body.password;
        }else{
                return next(new ErrorHandler("Invalid Reset Password Link ! Please try again ", 500)); 
        }
        await student.save();
        res.status(200).json({
        message: "Password has been Successfully Changed ! ",
       });
});


exports.studentresetpassword = catchAsyncErrors(async (req, res, next) => {
        const student = await Student.findById(req.id).exec();
        student.password = req.body.password;
        await student.save();
        sendtoken(student, 201, res);
});

exports.studentupdate = catchAsyncErrors(async (req, res, next) => {
        // const student =
        await Student.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(200).json({
                success: true,
                message: "Student Updated Successfully ! ",
                // student,
        });
});
 

exports.studentavatar  = catchAsyncErrors(async (req, res, next) => {
       const student = await Student.findById(req.params.id).exec(); 
       const file = req.files.avatar; 
       const modifiedFileName = `resumebuilder-${Date.now()}${path.extname(file.name)}`;

       if(student.avatar.fileId !== ""){
         await imagekit.deleteFile(student.avatar.fileId);
       }

       const { fileId, url } = await imagekit.upload({
        file: file.data,
        fileName: modifiedFileName,
       });

       student.avatar = { fileId, url};
       await student.save();
       res.status(200).json({
        success: true,
        message: "Profile Updated Sucessfully ! "

       }); 
});
 

//------------------------Apply-Internship-----------------------


exports.applyinternship = catchAsyncErrors(async (req, res, next) => {
        const student = await Student.findById(req.id).exec();
        res.json({ student });
        const internship = await Internship.findById(req.params.internshipid).exec();
        student.internships.push(internship._id);
        internship.students.push(student._id); 
        await student.save();
        await internship.save();  
        res.json({ student, internship });
});


//----------------------Apply-Job--------------------------------

exports.applyjob = catchAsyncErrors(async (req, res, next) => {
        const student = await Student.findById(req.id).exec();
        res.json({ student });
        const job = await Job.findById(req.params.jobid).exec();
        student.jobs.push(job._id);
        job.students.push(student._id); 
        await student.save();
        await job.save();  
        res.json({ student, job });
});


 