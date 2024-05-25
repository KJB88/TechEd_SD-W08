import Link from "next/link"
import Heading from "./heading"
export default function NotFound()
{
    return (
        <>
            <Heading data={{name: "404 - Another lost to the Zone..."}}/>
            <Link href="/" className="text-center hover:underline">Click here to return to the Homepage.</Link>
            <p className="text-center">Could not find requested post.</p>
        </>
    )
}