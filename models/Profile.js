const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    contactno: {
      type: Number,
      required: true,
      maxlength: 10,
      minlength: 10,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = Profile = mongoose.model('Profile', ProfileSchema);
