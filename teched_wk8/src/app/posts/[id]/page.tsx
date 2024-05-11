export default async function SinglePostPage ({ params }: { params: {id: number} }) {
  console.log(params)
  return (
    <div>
      <h1>Single Post Page</h1>
    </div>
  )
}
