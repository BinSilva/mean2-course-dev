var mongoose = require('mongoose');
var Note = require('../model/note');

var NoteService = {
    create: create,
    update: update,
    remove: remove,
    findAll: findAll,
    findById: findById,
    findByUserEmail: findByUserEmail
};

function findByUserEmail(email) {
    return new Promise(function(resolve, reject) {
        var criteria = {
            userEmail: email
        };

        Note.find(criteria, function (err, docs) {
            if (err) return reject(err);

            resolve(docs);
        });
    });
}

function findById(id) {
    return new Promise(function(resolve, reject) {

        Note.findById(id, function (err, doc) {
            if (err) return reject(err);

            resolve(doc);
        });

    });
}

function findAll() {
    return new Promise(function(resolve, reject) {
        var criteria = {};

        Note.find(criteria, function (err, docs) {
            if (err) return reject(err);

            resolve(docs);
        });
    });
}

function remove(id) {
    return new Promise(function(resolve, reject) {

        Note.findByIdAndRemove(id, function (err) {
            if (err) return reject(err);

            resolve();
        });

    });
}

function update(note) {
    return new Promise(function(resolve, reject) {

        Note.findByIdAndUpdate(note._id, note, function (err) {
            if (err) return reject(err);

            resolve();
        });

    });
}

function create(note) {
    return new Promise(function(resolve, reject) {

        note.save(function (err, note) {
            if (err) return reject(err);

            resolve(note);
        });

    });
}

module.exports = NoteService;