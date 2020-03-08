const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync,hashSync,genSaltSync } = require('bcryptjs');


const UserSchema = new Schema({
  name: {type: String, required: true},
  userName: {type: String, required: true},
  password: {type: String, required: true}
});

UserSchema.methods.toJSON() = function(){
  let user = this.toObject();
  delete user.password; // ESTO SUCEDERA CADA VEZ QUE SE REQUIERA UN DATO DE USER
  return user;
};

UserSchema.methods.comparePasswords = function(password){
  return compareSync(password, this.password); // Este comparara la contraseña enviada con el objeto que se manipule
}

UserSchema.pre('save',async function(next){ // Todo dentro del .pre, se ejecuta antes de guardar un dobjeto dentro de la DB
  const user = this;

  if(user.isModified('password')){
    return next()
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
})

module.exports = mongoose.model('user',UserSchema);