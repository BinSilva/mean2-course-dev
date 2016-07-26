var mongoose = require('mongoose');

function Connection() {

    mongoose.connect('mongodb://mean:mean@ds031915.mlab.com:31915/mynotesweb',
        function (err) {
            if (err) throw err;

            console.log('mongodb connectado');
        });
}

module.exports = Connection;