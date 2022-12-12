'use strict';
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, 'Please tell us your name!'],
    },
    email: {
      type: String,
      validate: {
        validator: function(email) {
          return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
        },
        message: props => `${props.value} is not a valid email address`,
      },
      required: [true, 'Email address validation failed'],
      unique: true,
      lowercase: true,
    },
    photo: String,
    password: {
      type: String,
      require: [true, 'Please provide a password'],
      minlength: [8, 'A password must have more or equal then 10 characters'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      require: [true, 'Please provide a password'],
      validate: {
        validator: function(el) {
          return el === this.password;
        },
        message: `Passwords are not the same!`,
      },
    },
    passwordChangedAt: Date,
  },
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

// instant method
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = this.passwordChangedAt.getTime() / 1000;
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }

  // False means not changed
  return false;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
