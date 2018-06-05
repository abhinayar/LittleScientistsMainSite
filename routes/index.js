// This file contains the global routing for the Little Scientists Application
// This could be abstracted into multiple files- future developer note
// Currently it's sitting at an unminfied 100 lines of code, which is small enough to justify leaving.
// By Abhi Nayar for SemiErect Design Co.
//
//
// set up dependencies
var express = require('express');
var router = express.Router();
var gsjson = require('google-spreadsheet-to-json'); //https://www.npmjs.com/package/google-spreadsheet-to-json
//
//
// Data Collection From Google Sheet
// Import the data via the NPM package above by specifying sheet_id
// For details please view the github page related to the NPM package above.
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
    // Sanity checks
    //console.log(result.length);
    //console.log(result);
    curriculumUnitData = result[0];
    earlyChildhoodData = result[1];
    scienceLessonData = result[2];
    // Sanity Checks
    //console.log(scienceLessonData)
    scienceSuppliesData = result[3];
  });
} getGoogleSheetData();
setInterval(function() {
  getGoogleSheetData();
}, 1000 * 60 * 15)
// This function will fire every 15 minutes
// Changes will take ~15-20 minutes from time of change in GSheet to propogate
//
//
//
//
// Home Page: '/' or 'https://little-scientists.com'
router.get('/', function(req, res, next) {
  res.render('home', {
    meta : {
      title: 'Home'
    }
  })
});
//
//
// About Page
router.get('/about', function(req, res, next) {
  res.render('about', {
    meta : {
      title: 'About Us'
    }
  })
});
//
//
// Product List Page
router.get('/products', function(req, res, next) {
  res.render('products', {
    meta : {
      title: 'Educational Products & Services'
    }
  })
});
//
//
// Product Matrices
router.get('/products/matrix', function(req, res, next) {
  // This is the FULL K-8 Matrix
  res.render('products/matrix', {
    meta : {
      title: 'K-8 Unit Matrix'
    }
  })
})
router.get('/products/NGSSmatrix', function(req, res, next) {
  // This is the condensed NGSS K - 5 Matrix
  res.render('products/NGSSmatrix', {
    meta : {
      title: 'NGSS Curriculum Matrix'
    }
  })
})
//
//
// Product Subpages
// Product subpages are rendered AS NAMED. DO NOT change the names in the 'views' folder or this will break.
// ALERT!
router.get('/products/:subpage', function(req, res, next) {
  var subpage = req.params.subpage;
  if (subpage) {
    if (subpage == 'ScienceSupplies') {
      res.render('products/ScienceSupplies', {
        data: scienceSuppliesData,
        url: '/products/ScienceSupplies',
        meta : {
          title: 'Science Supplies > Educational Products & Services'
        }
      })
    } else if (subpage == 'ScienceLessons') {
      res.render('products/ScienceLessons', {
        data: scienceLessonData,
        url: '/products/ScienceLessons',
        meta : {
          title: 'Science Lessons > Educational Products & Services'
        }
      })
    } else {
      res.render('products/' + subpage, {
        meta : {
          title: subpage.replace(/([A-Z]+)/g, ' $1').trim() + ' > Educational Products & Services'
        }
      })
    }
  } else {
    // Catch all bad requests and redirect here
    res.redirect('/products')
  }
})
//
//
// Early Childhood Subpages
router.get('/products/EarlyChildhood/:item', function(req, res, next) {
  var item = req.params.item;
  if (item) {
    res.render('products/EarlyChildhood/' + item, {
      data : earlyChildhoodData,
      url : '/products/EarlyChildhood/' + item,
      meta : {
        title: item.replace(/([A-Z]+)/g, ' $1').trim() + ' > Early Childhood > Educational Products & Services'
      }
    });
  } else {
    res.redirect('/products/EarlyChildhood');
  }
});
//
//
// Curriculum Unit Subpages
router.get('/products/CurriculumUnits/:gradeLevel', function(req, res, next) {
  var gradeLevel = req.params.gradeLevel;
  if (gradeLevel) {
    res.render('products/CurriculumUnits/' + gradeLevel, {
      data : curriculumUnitData,
      url : '/products/CurriculumUnits/' + gradeLevel,
      meta : {
        title: gradeLevel.replace(/([A-Z]+)/g, ' $1').trim() + ' > Curriculum Units > Educational Products & Services'
      }
    });
  } else {
    res.redirect('/prodcuts/CurriculumUnits');
  }
});
//
//
// Success Stories Page
router.get('/success-stories', function(req, res, next) {
  res.render('successStories', {
    meta : {
      title: 'Success Stories'
    }
  })
});
//
//
// Login Page
router.get('/login', function(req, res, next) {
  res.render('Login', {
    meta : {
      title: 'Login To Little Scientists'
    }
  })
});
//
//
// export the module
module.exports = router;
