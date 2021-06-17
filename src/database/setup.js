const mongoose =  require('mongoose');
require('dotenv').config();

const { connectionUri } = process.env;

module.exports = () => {
    mongoose.connect(connectionUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) throw err
        else console.log('Mongoose is connected')
    })
}