import { deleteComment, deletePost, putCommentLikes, putPostLikes } from "./ts/dbHandler";

/* eslint-disable @next/next/no-img-element */
export default function ContentModifier ({
  data
}: {
  data: { id: number; isPost: boolean }
}) {
  async function deleteContent () {
    'use server'
    console.log(data);
    if (data.isPost)
        {
            deletePost(data.id);
        }
        else{
            deleteComment(data.id);
        }

  }

  async function likeContent () {
    'use server'
    console.log(data);
    if (data.isPost)
        {
            putPostLikes(data.id);
        }
        else{
            putCommentLikes(data.id);
        }
  }

  return (
    <>
    <div className="flex flex-col-nowrap justify-end">
    <img
        src='/arrowUp.png'
        alt='Like the comment'
        className='object-contain h-8 w-8'
        onClick={likeContent}
      ></img>
      <img
        src='/cross.png'
        alt='Delete the comment'
        className='object-contain h-8 w-8'
        onClick={deleteContent}
      ></img>

      </div>
    </>
  )
}
