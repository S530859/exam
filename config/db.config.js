const url = "mongodb+srv://admin:admin@cluster0-tyjvv.mongodb.net/cars?retryWrites=true"
var mongoose = require('mongoose')
mongoose.connect(url)
.then(
    res => {
        console.log("DB Connected")
},
err =>{
    console.log(err)
})
.catch(err => {
    console.log(err)
})