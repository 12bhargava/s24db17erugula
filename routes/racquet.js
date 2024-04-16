// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('racquet', { title: 'Search Result racquet' });
// });

var express = require('express');
var passport = require('passport');
const racquet_controlers = require('../controllers/racquet');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.redirect("/login");
}
/* GET Racquets */
router.get('/', racquet_controlers.racquet_view_all_Page);
router.get('/detail', racquet_controlers.racquet_view_one_Page);
router.get('/create',secured, racquet_controlers.racquet_create_Page);
router.get('/update', secured, racquet_controlers.racquet_update_Page);
router.get('/delete',secured, racquet_controlers.racquet_delete_Page);
router.post('/login', passport.authenticate('local'), function (req, res) {
    res.redirect('/');
});


module.exports = router;