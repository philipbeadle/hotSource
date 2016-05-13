const User = require('../models/user');

module.exports = function (req, res) {
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res.status(400).json({success: false, message: 'Please enter email and password.'});
  } else {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password
    });

    // Attempt to save the user
    newUser.save(function (err) {
      if (err) {
        return res.status(400).json({success: false, message: 'That email address already exists.'});
      }
        return res.status(201).json({success: true, message: 'Successfully created new user.'});
    });
  }
};