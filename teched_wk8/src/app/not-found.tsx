import Link from "next/link"
import Heading from "./heading"
export default function NotFound()
{
    return (
        <>
            <Heading data={{name: "404 - Not Found"}}/>
            <p className="text-center">Could not find requested post.</p>
            <Link href="/" className="text-center hover:underline">Click here to return to the Homepage.</Link>
        </>
    )
}