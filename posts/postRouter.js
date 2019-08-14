const express = 'express';

const router = express.Router();

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validateUser(req, res, next) {
  if (!req.body) {
    res.status(400).json({ message: 'missing user data' })
  }
  else if (!req.body.name) {
    res.status(400).json({ message: 'missing required name field' })
  } else {
    next()
  }
}

function validatePostId(req, res, next) {

};

module.exports = router;