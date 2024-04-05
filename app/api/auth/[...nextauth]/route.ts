import nextAuth from "@/node_modules/next-auth/index";

import CredentialsProvider from 'next-auth/providers/credentials';

const handler = nextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                Email:{label:`email`, type:`text`, placeholder:`Enter Email`},
                Password: {label:`password`, type:`password`, placeholder:`Enter Password`}
            },
            async authorize(credentials:any) {
                return {
                    id:"user1"
                }
            }
        })
    ]
})

export const GET = handler;
export const POST = handler;