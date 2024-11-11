import dbConnect from "@lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from 'bcryptjs';
import { sendVerificationEmail } from "@/helpers/sendVeroficationEmail";


export async function POST(request :Request){
    await dbConnect()

    try {
       const {username,email,password}= await request.json()
    } catch (error) {
        console.error('Error in sign-up', error);
        return Response.json({
            success: false,
            message: 'error registering user'
        },
        {
            status: 500
        }) 

        
    }
}