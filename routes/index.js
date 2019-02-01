let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET products page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Content page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Content' });
});
module.exports = router;
