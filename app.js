const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express()
app
    .use(morgan('tiny'))
    .use(cors())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use("/", require('./routes'));

const port = process.env.PORT || 3000
app.listen(port, () => {
    require("./config/database");
    console.log(`Example app listening on port ${port}`)
})