"use client"
import {signIn, signOut } from "@/node_modules/next-auth/react";
export const Appbar = () => {
    return <div>
        <div className=" flex-container">
                <button onClick={()=>{signIn();}}>Signin </button>
                <button onClick={()=>{signOut();}}>Logout </button>
        </div>


    </div>
}