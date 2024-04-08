import { Appbar } from "@/components/Appbax";
import { getServerSession } from "next-auth"
import { json } from "stream/consumers";
import { NEXT_AUTH } from "../lib/auth";

export default async function () {
    const session = await getServerSession(NEXT_AUTH);
    return <div>
        <Appbar />
        User component
        {JSON.stringify(session)}
    </div>
}