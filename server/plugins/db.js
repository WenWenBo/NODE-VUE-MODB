const mongoose = require('mongoose');

module.exports = app => {
    mongoose.connect('mongodb://xxx.xxx.xxx.xxx:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}