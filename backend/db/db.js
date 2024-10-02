const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://meetlakhani98787:j19wWRKPp4PmfMhZ@cluster0.hfhtt.mongodb.net/').then((req, res) => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose