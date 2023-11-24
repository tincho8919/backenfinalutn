import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  _id: {type: mongoose.Types.ObjectId,default: () => new mongoose.Types.ObjectId(),},
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);

export default User;


