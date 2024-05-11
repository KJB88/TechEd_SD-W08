export async function generateMetadata({params}: {params: {id: number}})
{
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const post = await result.json();

    return {
        title: `Post: ${post.title}`,
        description: `${post.description}`,
    };
}

export default async function SinglePostPage ({ params }: { params: {id: number}}) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await resp.json();

  return (
    <div>
      <h1>Single Post Page</h1>
      <p>{post.title}</p>
    </div>
  )
}
