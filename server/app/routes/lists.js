const router = require('express').Router();
const List = require('../../db/models/list');
const User = require('../../db/models/user');

module.exports = router;

router.post('/', function(req, res, next) {
  List.create({
    movies: req.body.movies,
    shows: req.body.shows,
  })
  .then(function(list){
    res.send(list);
  })
  .catch(next);
});

router.put('/:id', function(req, res, next) {
  List.findById(req.params.id)
    .then(function(list){
      list.update(req.body)
        .then(function(list){
          res.send(list);
        });
    }).catch(next);
});

router.delete('/:id', function(req, res, next) {
  List.destroy({ where: { id: req.params.id } })
    .then(function(){
      res.sendStatus(200);
    })
    .catch(next);
});

