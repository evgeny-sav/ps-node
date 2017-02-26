/*jshint esversion: 6 */
'use strict';
const express = require('express');
let booksRouter = express.Router();
let mongodb = require('mongodb').MongoClient;
let ObjectId = require('mongodb').ObjectID;

let router = (nav) => {

    booksRouter.route('/')
        .get((req, res) => {
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collections = db.collection('books');
                collections.find({}).toArray((err, results) => {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: nav,
                        books: results
                    });
                });
            });
        });

    booksRouter.route('/:id')
        .get((req, res) => {
            let id = new ObjectId(req.params.id);
            let url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, (err, db) => {
                let collections = db.collection('books');
                collections.findOne({_id: id}, (err, results) => {
                    res.render('bookView', {
                        title: results.title,
                        nav: nav,
                        book: results
                    });
                });
            });
        });
    return booksRouter;
};


module.exports = router;
