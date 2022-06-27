import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    displayName: {
        type: String,
        trim: true,
        default: 'UserName'
    },
    fName: {
        type: String,
        require: [true, 'Please provide First name'],
        minlength: 2,
        trim: true
    },
    lName: {
        type: String,
        require: [true, 'Please provide last name'],
        minlength: 2,
        default: 'lastname',
        trim: true
    },
    email: {
        type: String,
        require: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message:'Please provide a valid email'
        },
        unique: true,
        
    },
    password: {
        type: String,
        require: [true, 'Please provide password'],
        minlength: 6,
        select: false,
        
    },
    zipCode: {
        type: String,
        trim: true,
        required: [true, 'Please provide home zip code']
    }
})
UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt);
})

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id }, process.env.JSON_TOKEN, { expiresIn: '1d' });
}
UserSchema.methods.comparePassword = async function (userPassword) {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
}

export default mongoose.model('User', UserSchema);