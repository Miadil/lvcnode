const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')
const app = express()

app.use(cors('*'))
app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/recipes', routes.recipes)

app.get('/', (req, res) => {
  res.send('Chicken World !')
})

app.listen(4242, console.log('http://localhost:4242'))
