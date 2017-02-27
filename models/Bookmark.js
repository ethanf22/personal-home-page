"use strict";

module.exports = function(sequelize, DataTypes)
{
	let Bookmark = sequelize.define('Bookmark', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		category_id: {
			type: DataTypes.INTEGER
		},
		url: {
			type: DataTypes.STRING
		},
		title: {
			type: DataTypes.STRING
		},
		ordinal: {
			type: DataTypes.INTEGER
		}
	}, {
		tableName: 'bookmarks',
		timestamps: false
	});

	return Bookmark;
};