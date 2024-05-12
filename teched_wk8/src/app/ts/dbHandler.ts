/* Database Handler */
/*******************/
// #region Config
import dotenv from "dotenv";
import pg from "pg";
import seedFullDB from "./seed";
import { selectAllPostsWithUserJoin, selectAllPosts, selectAllUsers, selectAllTags, selectAllFactions, selectAllLocations, selectAllCommentsByPostID, selectPostByPostID} from "./queries";
import {insertPost} from "./queries";

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

export async function getAllPosts()
{
    return (await db.query(selectAllPosts)).rows;
}

export async function getAllPostsWithUserJoin()
{
    return (await db.query((selectAllPostsWithUserJoin))).rows;
}
export async function getPostByID(id : number)
{
    return (await db.query(selectPostByPostID, [id])).rows;
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
    console.log(header);
    console.log(content);
    const result = await db.query(insertPost, [header, content, tag_id, user_id]);

    console.log(result);
}
// #endregion POST-INSERT routing
/*******************/