

var mongoose = require('mongoose')

var carSchema = mongoose.Schema({
 Make: String,
 Model: String,
 Year: Number,
 Type:String,
 Features: [String],
 PurchaseDate: Date
})

module.exports = mongoose.model('Car',carSchema)