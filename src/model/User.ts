 import mongoose , {Schema, Document}from 'mongoose';

 export interface Message extends Document {
    content: string;
    createdAt: Date;
 }
 //message data type define hogya ab user data type define karenge, message m content hoga and createdAt hoga
 
 const MessageSchema:Schema<Message> = new Schema({
    content : {
        type: String,
        required: true
    },
    createdAt: {
        type:Date,
        required: true,
        default : Date.now
    }
 })

//user schema define karenge
export interface User extends Document {
    username :string;
    email : string;
    password : string;
    verifyCode: string;
    isVerified: boolean;
    verifyCodeExpires: Date;
    isAcceptingMessages: boolean; 
    messages: Message[];
}

//message ke schema ke jaise hi iska bhi schema 
const UserSchema: Schema<User> = new Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required: [true , 'Email is required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please enter a valid email address'] 
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpires:{
        type:Date,
        required:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessages: {
        type:Boolean,
        required:true,
        default:true
    },
    messages: [MessageSchema]
})


//user model export krna h 

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User', UserSchema);

export default UserModel;