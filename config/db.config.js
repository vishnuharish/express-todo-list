module.exports = {
    HOST: "localhost",
    USER: "harish",
    PASSWORD: "harish",
    DB: "todo_list",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};