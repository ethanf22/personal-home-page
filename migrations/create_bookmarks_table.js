module.exports = {
	up: function(queryInterface, Sequelize) {
		queryInterface.createTable('bookmarks', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			category_id: {
				type: Sequelize.INTEGER
			},
			title: {
				type: Sequelize.STRING
			},
			url: {
				type: Sequelize.STRING
			},
			ordinal: {
				type: Sequelize.INTEGER
			}
		});
	},

	down: function(queryInterface, Sequelize) {
		queryInterface.dropTable('bookmarks');
	}
};