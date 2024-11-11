import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail"

import {ApiResponse} from "@/types/ApiResponse"

export async function sendVerificationEmail(
    email:string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from:'you@example.com',
            to: 'user@gmail.com',
            subject: 'Mystery feedback | Verification Code',
            react: VerificationEmail({username,otp:verifyCode})

        });
        return {
            success: true,
            message: 'Email Sent'
        }
    } catch (emailError) {
        console.log('Email Error', emailError);
        return{
            success: false,
            message: 'Email Error'
        }
    }
}