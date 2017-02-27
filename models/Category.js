"use strict";

module.exports = function(sequelize, DataTypes)
{
	let Category = sequelize.define('Category', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING
		}
	}, {
		tableName: 'categories',
		timestamps: false
	});

	return Category;
};