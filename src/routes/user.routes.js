const { Router } = require('express');
const { AuthMiddleware, ParseIntMiddleware } = require('../middlewares');

module.exports = function({UserController}){
  const router = Router();


  router.get('/:userId', UserController.get);
  router.get('/',[AuthMiddleware, ParseIntMiddleware], UserController.getAll);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);


  return router;
};