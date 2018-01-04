// set up dependencies
var express = require('express');
var router = express.Router();
var gsjson = require('google-spreadsheet-to-json');

// Data Collection From Google Sheet
var sheet_id = '14vevkBLVZelA90hfioWeR3GqjeaQWxxXWE-V1nwwXWo';
// Curriculum Units Data
var curriculumUnitData = null,
earlyChildhoodData = null,
scienceLessonData = null,
scienceSuppliesData = null;
function getGoogleSheetData() {
  gsjson({
    spreadsheetId: sheet_id,
    worksheet: ['Curriculum Units', 'Early Childhood', 'Science Lessons', 'Science Supplies']
  }).then(function(result) {
    //console.log(result.length);
    //console.log(result);
    curriculumUnitData = result[0];
    earlyChildhoodData = result[1];
    scienceLessonData = result[2];
    console.log(scienceLessonData)
    scienceSuppliesData = result[3];
  });
} getGoogleSheetData();
setInterval(function() {
  getGoogleSheetData();
}, 1000 * 60 * 30)

// Home Page
router.get('/', function(req, res, next) {
  res.render('home', {})
});

// About Page
router.get('/about', function(req, res, next) {
  res.render('about', {})
});

// Product List Page
router.get('/products', function(req, res, next) {
  res.render('products', {})
});

// Product Matrix
router.get('/products/matrix', function(req, res, next) {
  res.render('products/matrix', {})
})
router.get('/products/NGSSmatrix', function(req, res, next) {
  res.render('products/NGSSmatrix', {})
})

// Product Subpages
router.get('/products/:subpage', function(req, res, next) {
  var subpage = req.params.subpage;
  if (subpage) {
    if (subpage == 'EarlyChildhood') {
      res.render('products/EarlyChildhood', {
        data: earlyChildhoodData
      })
    } else if (subpage == 'ScienceSupplies') {
      res.render('products/ScienceSupplies', {
        data: scienceSuppliesData,
        url: '/products/ScienceSupplies'
      })
    } else if (subpage == 'ScienceLessons') {
      res.render('products/ScienceLessons', {
        data: scienceLessonData,
        url: '/products/ScienceLessons'
      })
    } else {
      res.render('products/' + subpage, {})
    }
  } else {
    res.redirect('/products')
  }
})

// Curriculum Unit Subpages
router.get('/products/CurriculumUnits/:gradeLevel', function(req, res, next) {
  var gradeLevel = req.params.gradeLevel;
  if (gradeLevel) {
    res.render('products/CurriculumUnits/' + gradeLevel, {
      data : curriculumUnitData,
      url : '/products/CurriculumUnits/' + gradeLevel
    });
  } else {
    res.redirect('/prodcuts/CurriculumUnits');
  }
});

// Login Page
router.get('/success-stories', function(req, res, next) {
  res.render('successStories', {})
});

// Login Page
router.get('/login', function(req, res, next) {
  res.render('Login', {})
});


// export the module
module.exports = router;
