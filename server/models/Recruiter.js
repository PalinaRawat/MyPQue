'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const recSchema = mongoose.Schema({
    local            : {
        companyName         : String,
        companyLogin        : String,
        companyPassword     : String
    },
    profile : {
    	hasProf				: Boolean,
    	standing			: String,
        major               : String,
        gradYear            : String,
        opType              : String,
        sponsorship         : Boolean,
        resume              : String,
    }
});

recSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

recSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('Recruiter', recSchema);