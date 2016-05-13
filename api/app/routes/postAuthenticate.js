const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../../config/main');

module.exports = function (req, res) {
  User.findOne({
    email: req.body.email
  }, function (err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).json({success: false, message: 'Authentication failed. User not found.'});
    } else {
      // Check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // Create token if the password matched and no error was thrown
          const token = jwt.sign(user, config.secret, {
            expiresIn: 10080 // in seconds
          });
          res.status(200).json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).json({success: false, message: 'Authentication failed. Passwords did not match.'});
        }
      });
    }
  });
}