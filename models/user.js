const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({

    username: { type: String, unique: true, required: true },
    isAdmin: { type: Boolean, default: false },

}, {timestamps: true});

userSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User",userSchema);