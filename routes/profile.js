const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const { AddProfile, ShowProfile } = require('../controllers/profile');
//POST routes for send data to database
router.post(
  '/profile',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('contactno', 'Enter your 10 digit contact number').isLength({
      min: 10,
      max: 10,
    }),
    check('dob', 'Enter Your date of birth').not().isEmpty(),
    check('gender', 'Enter your gender').not().isEmpty(),
    check('occupation', 'Enter your occupation').not().isEmpty(),
  ],
  AddProfile
);

//GET route for retrive the data from database
router.post(
  '/profile/me/',
  [check('email', 'Enter is required').not().isEmpty()],
  ShowProfile
);
module.exports = router;
