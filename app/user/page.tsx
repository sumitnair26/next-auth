import { getServerSession } from "next-auth"
import { json } from "stream/consumers";

export default async function () {
    const session = await getServerSession();
    return <div>
        User component
        {JSON.stringify(session)}
    </div>
}