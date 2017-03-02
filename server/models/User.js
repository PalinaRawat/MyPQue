'use strict'

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String,
        firstName    : String,
        lastName     : String
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

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema)