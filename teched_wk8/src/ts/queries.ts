/* Query Library */
/*******************/
// #region Selects

// User(s) - All
export const selectAllUsers = {
  name: "selectAllUsers",
  text: "SELECT * FROM users",
};

// User - By User ID
export const selectUserByUserID = {
  name: "selectUserByUserID",
  text: "SELECT * FROM users WHERE users.id = $1",
};

// User(s) - By Location
export const selectUsersByLocation = {
  name: "selectUserByLocation",
  text: "SELECT users, locations.name AS location FROM posts JOIN locations ON locations.id = $1",
};

// User(s) - By Faction
export const selectUsersByFaction = {
  name: "selectUserByFaction",
  text: "SELECT users, factions.name AS faction FROM posts JOIN factions ON factions_id = $1",
};

// Post(s) - All
export const selectAllPosts = {
  name: "selectAllPosts",
  text: "SELECT * FROM posts",
};

// Post - By Post ID
export const selectPostByPostID = {
  name: "selectPostByPostID",
  text: "SELECT * FROM posts WHERE posts.id = $1",
};

// Post(s) - By User ID
export const selectPostsByUserID = {
  name: "selectPostsByUserID",
  text: "SELECT * FROM posts WHERE posts.user_id = $1",
};

// Location(s) - All
export const selectAllLocations = {
  name: "selectAllLocations",
  text: "SELECT * FROM locations",
};

// Faction(s) - All
export const selectAllFactions = {
  name: "selectAllFactions",
  text: "SELECT * FROM factions",
};

// Tag(s) - All
export const selectAllTags = {
  name: "selectAllTags",
  text: "SELECT * FROM tags",
};

// Tag - By Tag ID
export const selectTagByTagID = {
  name: "selectTagByTagID",
  text: "SELECT * FROM tags WHERE tags.id = $1",
};

// #endregion Selects
/*******************/
// #region Inserts

// User
export const insertUser = {
  name: "insertUser",
  text: "INSERT INTO users (name, rank, faction_id, location_id) VALUES ($1, $2, $3, $4)",
};

// Faction
export const insertFaction = {
  name: "insertFaction",
  text: "INSERT INTO factions (name) VALUES ($1)",
};

// Location
export const insertLocation = {
  name: "insertLocation",
  text: "INSERT INTO locations (name) VALUES ($1)",
};

// Post
export const insertPost = {
  name: "insertPost",
  text: "INSERT INTO posts (header, content, tag_id, user_id) VALUES ($1, $2, $3, $4)",
};

// Tag
export const insertTag = {
  name: "insertTag",
  text: "INSERT INTO tags (name) VALUES ($1)",
};

// #endregion Inserts
/*******************/
// #region Updates

// #endregion Updates
/*******************/
// #region Deletes

//#endregion Deletes
/*******************/
// #region Seed-Specific

// Drop All Tables
export const dropAllTables = `DROP TABLE IF EXISTS posts, users, tags, locations, factions`;

// Truncate All Records
export const deleteAllRecordsInTable = `TRUNCATE $1`;


// Truncate All Records in All Tables
export const deleteAllRecordsInAllTables = `TRUNCATE users, posts, factions, tags, locations RESTART IDENTITY CASCADE`;

// Create Locations Table
export const createLocationsTable = `
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
     name TEXT)
     `;

// Create Factions Table
export const createFactionsTable = `
CREATE TABLE factions (
        id SERIAL PRIMARY KEY,
        name TEXT)
        `;

// Create Tags Table
export const createTagsTable = `
CREATE TABLE tags (
            id SERIAL PRIMARY KEY,
            name TEXT)
            `;

// Create Users Table
export const createUsersTable = `
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    rank TEXT,
    faction_id INTEGER REFERENCES factions (id),
    location_id INTEGER REFERENCES locations (id),
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)`;

// Create Posts Table
export const createPostsTable = `
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    header TEXT,
    content TEXT,
    user_id INTEGER REFERENCES users (id),
    tag_id INTEGER REFERENCES tags (id),
    date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    likes INTEGER DEFAULT '0'
)
`;
// #endregion Seed-Specific
/*******************/
