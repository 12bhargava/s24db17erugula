var racquet = require('../models/racquet');
// List of all racquets
exports.racquet_list = async function(req, res) {
try{
theracquets = await racquet.find();
res.send(theracquets);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.racquet_view_all_Page = async function(req, res) {
    try{
    theracquets = await racquet.find();
    res.render('racquet', { title: 'racquet Search Results', results: theracquets });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific racquet.
exports.racquet_detail = function(req, res) {
res.send('NOT IMPLEMENTED: racquet detail: ' + req.params.id);
};
// Handle racquet create on POST.
// exports.racquet_create_post = function(req, res) {
// res.send('NOT IMPLEMENTED: racquet create POST');
// };
// Handle racquet create on POST.
exports.racquet_create_post = async function(req, res) {
console.log(req.body)
let document = new racquet();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"racquet_type":"goat", "cost":12, "size":"large"}
document.Racquet_type = req.body.Racquet_type;
document.Racquet_usedfor = req.body.Racquet_usedfor;
document.Racquet_cost = req.body.Racquet_cost;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle racquet delete from on DELETE.
exports.racquet_delete = function(req, res) {
res.send('NOT IMPLEMENTED: racquet delete DELETE ' + req.params.id);
};
// Handle racquet update form on PUT.
exports.racquet_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: racquet update PUT' + req.params.id);
};