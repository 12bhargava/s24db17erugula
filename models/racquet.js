const mongoose = require("mongoose")
const racquetSchema = mongoose.Schema({
Racquet_type: {
    type:String,
    minlength:1,
    maxlength:10,
},
Racquet_usedfor:{
    type:String,
    minlenth:1,
    maxlength:10,
},
Racquet_cost: Number
})
module.exports = mongoose.model("racquet",
racquetSchema)