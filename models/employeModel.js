// const {default: mongoose} = require("mongoose");

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

 
const employeModel = new mongoose.Schema({

    firstname: {
        type: String,
        required: [true, "First Name is required"],
        minLength: [4, "First name should be atleast 4 character long "]
    },

    lastname: {
        type: String,
        required: [true, "Last Name is required"],
        minLength: [4, "Last name should be atleast 4 character long "]
    },

    contact: {
        type: String,
        // required: [true, "Contect is required"],
        maxLength: [10, "Contect must not exceed 10 character"],
        minLength: [10, "Contect  must not exceed 10 character"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match:  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    password: {
        type: String,
        select: false,
        maxLength: [15, "Password should not exceed more then 15 Characters "],
        minLength: [5, "Password should have atleast 5 Characters "], 
        // match: [] 
    },

    resetPasswordToken: {
        type: String,
        default: "0",
    },

    organizationname: {
        type: String,
        // required: [true, "Organization Name is required"],
        minLength: [4, "Organization name should be atleast 4 character long "]
    },

    organizationlogo: {
        type: Object,
        default: {
            fileId: '',
            url: "https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    },

    internship: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'internship'}
    ],

    jobs: [
        {type: mongoose.Schema.Types.ObjectId, ref: 'jobs'}
    ],
    
}, {timestamps: true});


employeModel.pre("save", function(){

    if(!this.isModified("password")){
        return;
    }

    let salt = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, salt); 
});


employeModel.methods.comparepassword = function(password){
    return bcrypt.compareSync(password, this.password);
};


employeModel.methods.getjwttoken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};


const Employe = mongoose.model("employe", employeModel);

module.exports = Employe;