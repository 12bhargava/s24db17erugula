const mongoose = require("mongoose")
const racquetSchema = mongoose.Schema({
Racquet_type: String,
Racquet_usedfor: String,
Racquet_cost: Number
})
module.exports = mongoose.model("racquet",
racquetSchema)