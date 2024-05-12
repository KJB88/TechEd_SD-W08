/* ROUTE: POST ID */
import { getPostByID } from "@/app/ts/dbHandler";
export async function generateMetadata({params}: {params: {id: number}})
{
    const result = await getPostByID(params.id);
    const post = result[0];

    return {
        title: `ZonePDA Post: ${post.title}`,
        description: `Viewing post of ${post.title}`,
    };
}

export default async function SinglePostPage ({ params }: { params: {id: number}}) {
  const result = await getPostByID(params.id);
  const post = result[0];

  return (
    <div>
      <h1>{post.id} : {post.header}</h1>
      <p>{post.content}</p>
    </div>
  )
}
