"use client"
import {signIn, signOut, useSession } from "@/node_modules/next-auth/react";
export const Appbar = () => {
    const session = useSession();
    return <div>
        <div className=" flex-container">
                <button onClick={()=>{signIn();}}>Signin </button>
                <button onClick={()=>{signOut();}}>Logout </button>
        </div>
        {JSON.stringify(session)}

    </div>
}