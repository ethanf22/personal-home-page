module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable('categories', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			title: {
				type: Sequelize.STRING
			}
		});
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('categories');
	}
};