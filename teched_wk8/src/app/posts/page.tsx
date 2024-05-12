/* POSTS */
import { getAllFactions, getAllLocations, getAllPosts, getAllTags, getAllUsers, getAllComments} from '@/app/ts/dbHandler'

export const metadata = {
        title: 'ZonePDA: All Posts',
        description: `View all Posts in ZonePDA.`,
    };

export default async function Posts ({
  searchParams
}: {
  searchParams: { sort: string }
}) {

  const allPosts = await getAllPosts()
  /*const allUsers = await getAllUsers()
  const allFactions = await getAllFactions()
  const allLocations = await getAllLocations()
  const allTags = await getAllTags()
  const allComments = await getAllComments()

  const userHTML = allUsers.map(user => <li className="drop-shadow" key={user.id}>{user.name}</li>)
 */
  const postHTML = allPosts.map(post => <li className="drop-shadow" key={post.id}>{post.content}</li>)
  /*
  const factionHTML = allFactions.map(faction => <li className="drop-shadow" key={faction.id}>{faction.name}</li>)

  const locationHTML = allLocations.map(location => <li className="drop-shadow" key={location.id}>{location.name}</li>)

  const tagHTML = allTags.map(tag => <li className="drop-shadow" key={tag.id}>{tag.name}</li>)

  const commentHTML = allComments.map(comment => <li className="drop-shadow" key={comment.id}>{comment.content}</li>)
  
  */
 return (
    <div>
      <h1 className='drop-shadow text-center font-bold text-2xl'>Posts</h1>
      <ul>{postHTML}</ul>
    </div>
  )
}

/*
      <ul>{userHTML}</ul>
      <ul>{factionHTML}</ul>
      <ul>{locationHTML}</ul>
      <ul>{tagHTML}</ul>
      <ul>{commentHTML}</ul>
      */