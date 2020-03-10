const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');

//SERVICES
const { HomeService,CommentService,IdeaService,UserService, AuthService } = require('../services');
//Controllers
const { HomeController, CommentController, IdeaController, UserController, AuthController } = require('../controllers');

//Routes

const { HomeRoutes, CommentRoutes, IdeaRoutes , UserRoutes, AuthRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

//Models
const { Comment,Idea,User} = require('../models');

//Repositories
const { CommentRepository,IdeaRepository,UserRepository } = require('../repositories');

const container = createContainer();

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config)
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    AuthService: asClass(AuthService).singleton(),
    CommentService: asClass(CommentService).singleton()
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    CommentController: asClass(CommentController.bind(CommentController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton()
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    IdeaRoutes: asFunction(IdeaRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
    CommentRoutes: asFunction(CommentRoutes).singleton()
  })
  .register({
    User: asValue(User),
    Idea: asValue(Idea),
    Comment: asValue(Comment)
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton()
  })

module.exports = container;  