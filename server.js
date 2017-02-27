"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const console = require('better-console');
const models = require('./models');

const app = express();

app.set('view engine', 'ejs'); //View Engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/assets')); //Loads css and js assets
app.use(express.static(__dirname + '/node_modules')); //Loads css and js assets

/**
 * Root
 */
app.get('/', (req, res) => {
	models.Category.findAll().then(function( categories ){

		models.Bookmark.findAll({ order: ['ordinal'] }).then(function( bookmarks ){

			/**
			 * Loads the bookmarks into an object by category id.
			 */
			let bookmarks_by_category_id = {};

			for( let i=0; i < bookmarks.length; i++ ){
				let category_id = bookmarks[i].category_id;

				if( typeof bookmarks_by_category_id[ category_id ] == 'undefined' ){
					bookmarks_by_category_id[ category_id ] = [];
				}

				bookmarks_by_category_id[ category_id ].push(bookmarks[i]);
			}

			res.render('index.ejs', {
				categories: categories,
				bookmarks: bookmarks_by_category_id
			});
		});
	});
});

/**
 * Redirects home to root
 */
app.get('/home', (req, res) => {
	res.redirect('/');
});

/**
 * Adds a bookmark to the database
 */
app.post('/bookmark', (req, res) => {
	let url = req.body.url;
	let title = req.body.title;
	let category_id = req.body.category_id;

	models.Bookmark.create({
		url: url,
		title: title,
		category_id: category_id
	}).then(function(){
		res.redirect('/');
	});

	res.redirect('/');
});

/**
 * Removes a bookmark from the database
 */
app.post('/remove-bookmark', (req, res) => {
	let bookmarkId = req.body.id;

	models.Bookmark.findById(bookmarkId).then(function(bookmark){
		if( bookmark !== null ) {
			bookmark.destroy().then(function(){
				res.redirect('/');
			})
		}
	});
});

app.post('/update-ordinals', (req, res) => {
	let bookmarkIds = JSON.parse(req.body.ordinals);

	for(let id in bookmarkIds ){
		if( bookmarkIds.hasOwnProperty(id)){
			models.Bookmark.findById(id).then(function(bookmark){
				bookmark.update({
					ordinal: bookmarkIds[id]
				});
			});
		}
	}

	res.send(1);
});

app.listen(8888);