const mongoose = require('mongoose');

module.exports = app => {
    mongoose.connect('mongodb://192.168.163.190:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}