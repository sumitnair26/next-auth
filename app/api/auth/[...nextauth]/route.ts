import { NEXT_AUTH } from "@/app/lib/auth";
import nextAuth from "@/node_modules/next-auth/index";

const handler = nextAuth(NEXT_AUTH)

export const GET = handler;
export const POST = handler;

console.log(GET);
console.log(POST);