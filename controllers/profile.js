const Profile = require('../models/Profile');
const { check, validationResult } = require('express-validator');

module.exports.AddProfile = async (req, res) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { name, email, contactno, dob, gender, occupation } = req.body;
    const newProfile = {
      name,
      email,
      contactno,
      dob,
      gender,
      occupation,
    };
    let profile = await Profile.findOne({ email });
    if (profile) {
      return res.send('Profile is already exists. Please use new email to create a profile.')
      
    }
    profile = new Profile(newProfile);
    await profile.save();
    res.send('success');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
module.exports.ShowProfile = async (req, res) => {
  const errros = validationResult(req);
  if (!errros.isEmpty()) {
    return res.status(400).json({ errors: errros.array() });
  }
  const { email } = req.body;
  let profile = await Profile.findOne({ email });
  if (!profile) {
    return res.send('Profile Not found');
  }
  try {
    res.send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
