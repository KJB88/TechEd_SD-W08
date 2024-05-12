/* Database Seed */
/*******************/
// #region Imports
import { Pool } from "pg";

// Create Tables
import {createCommentsTable, createFactionsTable, createLocationsTable, createPostsTable, createTagsTable, createUsersTable} from "./queries";
// Drop Tables
import { dropAllTables } from "./queries";
// Inserts
import { insertFaction, insertLocation, insertPost, insertTag, insertUser, insertComment} from "./queries";

// #endregion Imports
/*******************/
// #region Seeding

// Populate the DB with seed data
export default async function seedFullDB(db: Pool)
{
    console.log("SEED: Seeding DB...");

    // DEBUG - Nukes DB
    await DEBUG_nukeDB(db);

    // Create tables
    await createTables(db);    
    
    // Non-dependent tables (Order does not matter)
    await populateTags(db);
    await populateFactions(db);
    await populateLocations(db);

    // Dependent tables (Order matters)
    await populateUsers(db);
    await populatePosts(db);
    await populateComments(db);

    console.log("SEED: DB seed complete.")
}

/* Individual Seed Functions 
NOTE: They are all await to lock IDs for testing. */

// Create Tables
async function createTables(db: Pool)
{
    console.log("SEED: Creating tables...")
    await db.query(createFactionsTable);
    await db.query(createLocationsTable);
    await db.query(createTagsTable);
    await db.query(createUsersTable);
    await db.query(createPostsTable);
    await db.query(createCommentsTable);

    console.log("SEED: All tables created.")
}
// Factions
// (name)
async function populateFactions(db: Pool)
{
    console.log("SEED: Seeding factions...")
    await db.query(insertFaction, ["Loner"]); // 1
    await db.query(insertFaction, ["Duty"]); // 2
    await db.query(insertFaction, ["Freedom"]); // 3
    await db.query(insertFaction, ["Clear Sky"]); // 4
    await db.query(insertFaction, ["Monolith"]); // 5
    console.log("SEED: Factions seeded.")
}

// Locations
// (name)
async function populateLocations(db: Pool)
{
    console.log("SEED: Seeding locations...")
    await db.query(insertLocation, ["100 Rads Bar"]); // 1
    await db.query(insertLocation, ["Skadovsk"]); // 2
    await db.query(insertLocation, ["Rookie Village"]); // 3
    await db.query(insertLocation, ["Labs (Underground)"]); // 4
    await db.query(insertLocation, ["Swamps"]); // 5
    await db.query(insertLocation, ["CNPP"]); // 6
    await db.query(insertLocation, ["Pripyat"]); // 7
    console.log("SEED: Locations seeded.")
}

// Users
// (name, rank, factionID, locationID)
async function populateUsers(db: Pool)
{
    console.log("SEED: Seeding users...")
    await db.query(insertUser, ["Vanderlust", "Veteran", 2, 1]); // 1
    await db.query(insertUser, ["Cera", "Master", 1, 2]); // 2
    await db.query(insertUser, ["Artyom", "Rookie", 3, 3]); // 3
    await db.query(insertUser, ["Strelok", "Master", 1, 6]); // 4
    await db.query(insertUser, ["Charon", "Master", 5, 7]); // 5
    await db.query(insertUser, ["Sidorovich", "Trader", 1, 3]); // 6
    await db.query(insertUser, ["Wollivan", "Novice", 1, 5]); // 7
    console.log("SEED: Users seeded.")
}

// Tags
// (name)
async function populateTags(db: Pool)
{
    console.log("SEED: Seeding tags...")
    await db.query(insertTag, ["Recruitment"]); // 1
    await db.query(insertTag, ["Personal"]); // 2
    await db.query(insertTag, ["Advice"]); // 3
    await db.query(insertTag, ["Buying"]); // 4
    console.log("SEED: Tags seeded.")
}

// Posts
// (header, content, tag, user_id)
async function populatePosts(db: Pool)
{
    console.log("SEED: Seeding posts...")
    // 1
await db.query(insertPost, [
"Praise the Monolith!", 
"ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH! ALL HAIL THE MONOLITH!",
1,
5
]);

// 2
await db.query(insertPost, [
"Day 67: Still surviving!", 
"Phew, its day 67 and I'm still going! My armour has a few holes in it, I'm low on ammo and I'm pretty sure my pee is going to glow in the dark, but I'm alive. That's all we can ask for in the Zone.",
2,
2
]);

// 3
await db.query(insertPost, [
"Buying: 12g Slugs", 
"I'm buying 12g Slugs in bulk for a trek out of the village. I don't have many roubles, but I have plenty of vodka to trade. Drop me a message in the comments. - KR, Artyom.",
4,
3
]);

// 4
await db.query(insertPost, [
"New to the Zone!",
"Hi guys, I'm new to the Zone! Does anyone have any tips? Also, is it normal to feel your brain tingle and hear a strange rock talking to you in your dreams?",
3,
7
]);
console.log("SEED: Posts seeded.")
}


// Comments
// (content, user_id, post_id)
async function populateComments(db : Pool)
{
    console.log("SEED: Seeding comments...")
    // cID 1 by uID 1 on pID 3
    await db.query(insertComment, ["Pryvit bratan! Buckshot much better for trip outside village!", 1, 3]);

    // cID 2 by uID 3 on pID 2
    await db.query(insertComment, ["Every day that ends where we're still breathing is a good day!", 3, 2]);

    // cID 3 by uID 2 on pID 1
    await db.query(insertComment, [
        "How do these guys still have network access? Is Sidorovich sleeping on the job again?", 2, 1]);
    
    // cID 4 by uID 6 on pID 1
    await db.query(insertComment, ["If you don't like it, don't use it! Blyat!", 6, 1]);

    // cID 5 by uID 1 on pID 4
    await db.query(insertComment, ["Vodka, moy tovarisch! No tingle if no brain! Budmo!", 1, 4]);
    console.log("SEED: Comments seeded.")
}


async function DEBUG_nukeDB(db: Pool)
{
    console.log("SEED: Nuking DB...")
    await db.query(dropAllTables);
    console.log("SEED: DB nuked.")
}
// #endregion Seeding
/*******************/