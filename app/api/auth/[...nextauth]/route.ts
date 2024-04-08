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
    ]
})

export const GET = handler;
export const POST = handler;

console.log(GET);
console.log(POST);