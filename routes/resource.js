var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var racquet_controller = require('../controllers/racquet');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// racquet ROUTES ///
// POST request for creating a racquet.
router.post('/racquet', racquet_controller.racquet_create_post);
// DELETE request to delete racquet.
router.delete('/racquet/:id', racquet_controller.racquet_delete);
// PUT request to update racquet.
router.put('/racquet/:id', racquet_controller.racquet_update_put);
// GET request for one racquet.
router.get('/racquet/:id', racquet_controller.racquet_detail);
// GET request for list of all racquet items.
router.get('/racquet', racquet_controller.racquet_list);
module.exports = router;
// API for our resources
exports.api = function(req, res) {
res.write('[');
res.write('{"resource":"racquet", ');
res.write(' "verbs":["GET","PUT", "DELETE"] ');
res.write('}');
res.write(']')
res.send();
};
