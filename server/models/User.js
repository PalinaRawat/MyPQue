'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
    local            : {
        email               : String,
        password            : String,
        firstName           : String,
        lastName            : String,
    },
    Recruiter        : {
        isRec               : Boolean,
        companyName         : String,
        companyLogin        : String,
        companyPassword     : String
    },
    profile          : {
    	hasProf				: Boolean,
    	standing			: String,
        major               : String,
        gradYear            : String,
        opType              : String,
        sponsorship         : Boolean,
        resume              : String,

        //Company properties
        description         : String,
        lookingFor          : [String],
        hiring              : [String],
        sponsers            : Boolean,
        timePer             : String
    }
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

userSchema.methods.validCompanyPassword = function(password) {
    return bcrypt.compareSync(password, this.Recruiter.companyPassword);
};


module.exports = mongoose.model('User', userSchema)