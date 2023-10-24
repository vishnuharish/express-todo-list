module.exports = (sequelize, Sequelize) => {
    const Todo = sequelize.define("todos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isComplete: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            field: "created_at",
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        }

    })
}