/* Database Handler */
/*******************/
// #region Config
import dotenv from "dotenv";
import pg from "pg";
import seedFullDB from "./seed";
import { selectAllPostsWithUserJoin, selectAllPosts, selectAllUsers, selectAllTags, selectAllFactions,
     selectAllLocations, selectAllCommentsByPostID, selectPostByPostID, updateCommentLikesByCommentID,
      updatePostLikesByPostID, deleteCommentByCommentID, deletePostByPostID, selectPostsByTagIDWithTagJoin, selectUserByUserID} from "./queries";
import {insertPost, insertComment} from "./queries";
// Use envVars
dotenv.config();

// DB connection
const dbConnStr = process.env.DATABASE_URL;
const db = new pg.Pool({connectionString: dbConnStr});

// #endregion Config
/*******************/
// #region Core

export async function dbInit(){
    console.log("DBHANDLER: Initializing DB...");
    await seedFullDB(db);
    console.log("DBHANDLER: DB initialized.");
}

// #endregion Core
/*******************/
// #region GET-SELECT routing

export async function getAllUsers()
{
    return (await db.query(selectAllUsers)).rows;
}
export async function getUserByID(id: number)
{
    return (await db.query(selectUserByUserID, [id])).rows;
}

export async function getAllPosts()
{
    return (await db.query(selectAllPosts)).rows;
}

export async function getAllPostsWithUserJoin()
{
    return (await db.query(selectAllPostsWithUserJoin)).rows;
}

export async function getPostByID(id : number)
{
    return (await db.query(selectPostByPostID, [id])).rows;
}

export async function getPostsByTagID(id: number)
{
    return (await db.query(selectPostsByTagIDWithTagJoin, [id])).rows;
}

export async function getAllTags()
{
    return (await db.query(selectAllTags)).rows;
}

export async function getAllFactions()
{
    return (await db.query(selectAllFactions)).rows;
}

export async function getAllLocations()
{
    return (await db.query(selectAllLocations)).rows;
}

export async function getAllCommentsByPostID(id : number)
{
    return (await db.query(selectAllCommentsByPostID, [id])).rows;
}

// #endregion GET-SELECT routing
/*******************/
// #region POST-INSERT routing

export async function addNewPost(header: string, content: string, tag_id: number, user_id: number)
{ 
    const result = await db.query(insertPost, [header, content, tag_id, user_id]);
}

export async function addNewComment(content: string, user_id: number, post_id: number)
{
    const result = await db.query(insertComment, [content, user_id, post_id]);
}

// #endregion POST-INSERT routing
/*******************/
// #region PUT-UPDATE routing

export async function putCommentLikes(comment_id : number)
{
    console.log(comment_id);
    const result = await db.query(updateCommentLikesByCommentID, [comment_id]);
    console.log(result);
}
export async function putPostLikes(post_id : number)
{
    console.log(post_id);
    const result = await db.query(updatePostLikesByPostID, [post_id]);
}
// #endregion PUT-UPDATE routing
/*******************/
// #region DEL-DEL routing

export async function deleteComment(comment_id : number)
{
    console.log(comment_id);
    const result = await db.query(deleteCommentByCommentID, [comment_id]);
}

export async function deletePost(post_id : number)
{
    console.log(post_id);
    const result = await db.query(deletePostByPostID, [post_id]);
    console.log(result);
}
// #endregion DEL-DEL routing
/*******************/