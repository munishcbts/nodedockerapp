const express = require('express')
const { Sequelize }= require("sequelize")
const app = express()
const port = 80
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
})()

app.get('/', (req, res) => res.send('Hello Munish!'))


app.listen(port, () => console.log(`Node Docker App listening on port ${port}!`))