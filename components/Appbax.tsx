"use client"
import {signIn, signOut } from "@/node_modules/next-auth/react";
export const Appbar = () => {
    return <div>
        <button onClick={()=>{signIn();}}>Signin </button>
        <button onClick={()=>{signOut();}}>SignOut </button>

    </div>
}