module.exports = function (sequelize, DataTypes) {
	const users = sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(253),
			allowNull: false,
		},
        username: {
			type: DataTypes.STRING(253),
			allowNull: false,
		},
        password: {
			type: DataTypes.STRING(253),
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.fn('current_timestamp')
		},
		updated_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'users'
	});

	return users;
};