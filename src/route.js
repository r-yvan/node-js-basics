const express = require('express')
const swaggerUi = require('swagger-ui-express')
const mongoose = require('mongoose')
var app = express()

app.get('/', function getData(res, req){
    res.send('Fetching Data...')
})