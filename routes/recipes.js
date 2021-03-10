const express = require('express')

const router = express.Router()

const recipes = [
  { id: 1, name: 'Cookie' },
  { id: 2, name: 'Msemen' },
  { id: 3, name: 'Donuts' }
]

router.get('/', (req, res) => {
  res.send(recipes)
})

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json(recipes.find(recipe => recipe.id === Number(req.params.id)))
})

module.exports = router
