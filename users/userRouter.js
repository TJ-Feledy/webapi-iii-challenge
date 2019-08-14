const express = require('express');

const Users = require('./userDb.js')

const router = express.Router();

router.post('/', validateUser,(req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(() => {
      res.status(500).json({ errorMessage: 'Error adding user.' })
    })
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id

  Users.getById(id)
    .then(user => {
      if (user) {
        user = req.user
        next()
      }else {
        res.status(400).json({ message: 'invalid user id' })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: 'Error finding user' })
    })
};

function validateUser(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: 'missing user data' })
  }
  else if (!req.body.name || req.body.name.split('').length === 0) {
    res.status(400).json({ message: 'missing required name field' })
  } else {
    next()
  }
}

function validatePost(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: 'missing user data' })
  }
  else if (!req.body.text || req.body.text.split('').length === 0) {
    res.status(400).json({ message: 'missing required name field' })
  } else {
    next()
  }
};

module.exports = router;
