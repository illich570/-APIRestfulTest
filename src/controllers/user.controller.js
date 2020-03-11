let _userService = null;
class UserController {
  constructor({UserService}){
    _userService = UserService;
  }
 // ANTES DE LLEGAR AQUI PASA POR TODOS LOS MIDDLEWARES

  async get(req, res){
    const { userId} = req.params; //myapi.com/user/455454 < esto es params
    const user = await _userService.get(userId);
    return res.send(user);
  }

  async getAll(req, res){
    const {pageSize, pageNum} = req.query;
    const users = await _userService.getAll(pageSize, pageNum);
    return res.send(users);
  }

  async update(req,res){
    const { body } = req;
    const { userId } = req.params;
    const updateUser = await _userService.update(userId, body);
    return res.send(updateUser);
  }

  async delete(req,res){
    const { userId } = req.params;
    const deleteUser = await _userService.delete(userId);
    return res.send(deleteUser);
  }
}

module.exports = UserController;