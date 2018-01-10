import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

//account schema를 만들고, model로 만든후 export실행
const Account = new Schema({
    username: String,
    password: String,
    created: { type: Date, default: Date.now }
});

// generates hash
Account.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, 8);
};

// compares the password
Account.methods.validateHash = function(password) {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model('account', Account);
