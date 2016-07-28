var express = require('express');
var router = express.Router();

var Note = require('../model/note');
var NoteService = require('../service/note.service');
var FirebaseService = require('../firebase/firebase.service');

router.use('/', function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    } else {
        FirebaseService.validateToken(req.get('X-Auth-Token'))
            .then(function (user) {
                req.userEmail = user.email;

                next();
            }, function (err) {
                res.status(403).send({
                    status: 403,
                    message: 'Autenticação obrigatória.'
                });
            });
    }
});

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', remove);

function findAll(req, res, next) {
    
    NoteService.findByUserEmail(req.userEmail)
        .then(function (notes) {
            res.status(201).json(notes);
        }, function (err) {
            res.status(404).send({
                status: 404,
                message: 'Nenhuma nota encontrada'
            });
        });
}

function findById(req, res, next) {
    
    NoteService.findById(req.param('id'))
        .then(function (notes) {
            res.status(201).json(notes);
        }, function (err) {
            res.status(404).send({
                status: 404,
                message: 'Nota não foi encontrada'
            });
        });
}

function create(req, res, next) {
    
    var note = new Note({
        title: req.body.title,
        description: req.body.description,
        userEmail: req.userEmail
    });

    NoteService.create(note)
        .then(function (note) {
            res.status(201).json(note);
        }, function (err) {
            res.status(500).send({
                status: 500,
                message: err
            });
        });
}

function update(req, res, next) {
    
    var note = new Note({
        _id: req.body._id,
        title: req.body.title,
        description: req.body.description,
        userEmail: req.userEmail
    });

    NoteService.update(note)
        .then(function () {
            res.status(201).json({
                status: 201,
                message: 'Note atualizada com sucesso'
            });
        }, function (err) {
            res.status(500).send({
                status: 500,
                message: err
            });
        });
}

function remove(req, res, next) {
    
    console.log(req.param('id'));
    
    NoteService.remove(req.param('id'))
        .then(function () {
            res.status(201).json({
                status: 201,
                message: 'Note excluída com sucesso'
            });
        }, function (err) {
            res.status(404).send({
                status: 404,
                message: err
            });
        });
}

module.exports = router;