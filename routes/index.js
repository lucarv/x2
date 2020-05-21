'use strict';
const express = require('express');
const router = express.Router();
//routing
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'first',
  });
});

router.get('/cant', function (req, res, next) {
  res.render('cant', {
    title: 'words',
  });
});

router.get('/syl', function (req, res, next) {
  res.render('syl', {
    title: 'words',
  });
});

router.get('/grap', function (req, res, next) {
  res.render('grap', {
    title: 'images',
  });
});

router.get('/pix', function (req, res, next) {
  res.render('pix', {
    title: 'gallery',
  });
});

router.get('/mamom', function (req, res, next) {
  res.render('mamom', {
    title: 'first',
  });
});
router.get('/wernher', function (req, res, next) {
  res.render('wernher', {
    title: 'second',
  });
});

router.get('/dlu', function (req, res, next) {
  res.render('dlu', {
    title: 'third',
  });
});

router.get('/ss', function (req, res, next) {
  res.render('ss', {
    title: 'fourth',
  });
});

router.get('/tnf', function (req, res, next) {
  res.render('tnf', {
    title: 'fifth',
  });
});



module.exports = router;