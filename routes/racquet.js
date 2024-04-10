// var express = require('express');
// var router = express.Router();
 
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('racquet', { title: 'Search Result racquet' });
// });

var express = require('express');
const racquet_controlers= require('../controllers/racquet');
var router = express.Router();
/* GET Racquets */
router.get('/', racquet_controlers.racquet_view_all_Page );
router.get('/detail', racquet_controlers.racquet_view_one_Page);
router.get('/create', racquet_controlers.racquet_create_Page);
router.get('/update', racquet_controlers.racquet_update_Page);
router.get('/delete', racquet_controlers.racquet_delete_Page);

module.exports = router;