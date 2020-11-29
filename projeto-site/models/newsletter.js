'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Newsletter = sequelize.define('Newsletter',{
		id: {
			field: 'id',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			field: 'email',
			type: DataTypes.STRING,
			allowNull: false
		},
	}, 
	{
		tableName: 'curiosos', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

	return Newsletter;
};