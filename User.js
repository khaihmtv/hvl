const mongoose=require('mongoose')

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, index: true, unique: true },
    pass:{ type: String, required: true}
});
module.exports= mongoose.model('User', UserSchema);