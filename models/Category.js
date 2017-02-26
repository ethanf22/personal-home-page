module.exports = function(sequelize, DataTypes)
{
	return sequelize.define('categories', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		title: {
			type: DataTypes.STRING
		}
	});
};