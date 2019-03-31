var express = require('express');
var router = express.Router();
var Skills = require('../models/skills');

/* GET home page. */
router.get('/', function (req, res, next) {
  Skills.find(function (err, skill) {
    res.render('index', { title: 'Node Project', skills: skill });
  });
});
module.exports = router;
