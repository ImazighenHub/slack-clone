"use client"

import {useState} from "react";
import {SignInFlow} from "@/app/features/auth/auth.types";
import SigninCard from "@/app/features/auth/components/signin-card";
import SignupCard from "@/app/features/auth/components/signup-card";

export const AuthScreen = () => {

    const [signInFlow, setSignInFlow] = useState<SignInFlow>("SIGN_IN")

    return (
        <div className="h-full flex items-center justify-center">
            <div className="md:h-auto md:w-[420px]">
                {signInFlow === "SIGN_IN" && (<SigninCard onSignin={() => setSignInFlow("SIGN_IN")} onSignup={() => setSignInFlow("SIGN_UP")} />)}
                {signInFlow === "SIGN_UP" && (<SignupCard onSignin={() => setSignInFlow("SIGN_IN")} onSignup={() => setSignInFlow("SIGN_UP")}/>)}
            </div>
        </div>
    )
}