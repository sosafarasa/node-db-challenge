const router = require('express').Router();

const Actions = require('./actions-model');

router.get('/', (req, res) => {
  Actions.find()
    .then(actions => { res.status(200).json(actions) })
    .catch(err => { res.status(500).json({ message: 'An error occured trying to retrieve the action' }) })
})

router.post('/', async (req, res) => {

  await Actions.add(req.body)
  .then(action => {
    res.status(201).json(action)
  })
  .catch(err => {
    res.status(500).json({ message: 'An error occured trying to create the action', err })
  })

});


module.exports = router;