var firebase = require('firebase');

firebase.initializeApp({
    serviceAccount: "./firebase/firebase.json",
    authDomain: "notes-web-atilla.firebaseapp.com",
    databaseURL: "https://notes-web-atilla.firebaseio.com"
});

var auth = firebase.auth();

var FirebaseService = {
    validateToken: validateToken
};

function validateToken(token) {
    return new Promise(function (resolve, reject) {

        auth.verifyIdToken(token)
            .then(function (user) {
                resolve(user);
            }, function (err) {
                reject(err);
            });

    });
}

module.exports = FirebaseService;