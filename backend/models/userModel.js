const mongoose = require('mongoose');
const bycrpt = require('bcrypt')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

// static signup Method

userSchema.statics.signup =async (email,password)=>{
    const exist = await this.findOne({ email })
    if(exist){
        throw Error('Email is already exist')
    }

    const salt = await bycrpt.genSalt(10)
    const hash = await bycrpt.hash(password,salt)

    const user = await this.create({email,password:hash})

    return user
}

module.exports = mongoose.model('user',userSchema);