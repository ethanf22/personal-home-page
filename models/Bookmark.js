module.exports = function(sequelize, DataTypes)
{
	return sequelize.define('bookmarks', {
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
	});
};