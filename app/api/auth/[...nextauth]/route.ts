import nextAuth from "@/node_modules/next-auth/index";

import CredentialsProvider from '@/node_modules/next-auth/providers/credentials';

const handler = nextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                Email:{label:`email`, type:`text`, placeholder:`Enter Email`},
                Password: {label:`password`, type:`password`, placeholder:`Enter Password`}
            },
            async authorize(credentials:any) {
                console.log(credentials);
                //backend validation
                //if validation fails auth library automaticaly shows error on login screen
                return {
                    id:"user1",
                    name:"Sumit Nair",
                    email:"sumit.nair26@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt:({token, user}) => {
            token.userId = token.sub; //sub=subject
            console.log(token);
            return token;
        },
        session : ({session, token, user}) => {
            console.log(session);
            if (session && session.user) {
                session.user.id= token.userId;                 
            }
            return session;
        }
    }
})

export const GET = handler;
export const POST = handler;

console.log(GET);
console.log(POST);