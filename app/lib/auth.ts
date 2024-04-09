
import CredentialsProvider from '@/node_modules/next-auth/providers/credentials';
import GoogleProvider from "@/node_modules/next-auth/providers/google";
import GitHubProvider from "@/node_modules/next-auth/providers/github";
export const NEXT_AUTH = {
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
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
}