/* ROUTE: POST ID */
import { getPostByID, getAllCommentsByPostID } from "@/app/ts/dbHandler";
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

  const cmtResult = await getAllCommentsByPostID(post.id);
  const comments = cmtResult;

  return (
    <>
    <div className="border-b-2 border-b-white">
      <h1 className="heading">{post.header}</h1>
      <p>{post.content}</p>
      by <span className="font-bold">{post.name}</span> at <span className="font-bold">{post.date_created.toString()}</span>
    </div>
    <div>
      <form className="border-b-2 border-b-white">

      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="border-b-2 border-b-white">
          <p>{comment.content}</p> by <span className="font-bold">{comment.name}</span> at <span className="font-bold">{comment.date_created.toString()}</span>
           </li>
        ))}
      </ul>
    </div>
    </>
  )
}
