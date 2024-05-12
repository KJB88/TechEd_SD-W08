<div align="center">
  <h1>:mortar_board: Tech Educators' SWD Bootcamp :mortar_board:<br/>:mortar_board: Week 08 Assessment :mortar_board:</h1>
    <p>
    🌴<a href="https://linktr.ee/kjb88">Linktree</a>🌴
    </p>
  <p>
    Repository for coursework for TechEd Software Development Bootcamp - Week 08.
  </p>
</div>
<section>
  <h2>📋 Project Outline</h2>
  <p>You've built a simple blog, your task now is to embellish it. Use database relationships to add a comments table. Add categories and tags to your posts. Add a form to create new comments. Add an edit page that populates the form with the post data and allows you save changes to the database.

You can use Vercel Postgres or Supabase, so long as Postgres is the database.</p>
  <p><b>All requirements were met. One stretch goal was achieved (Categories/:id). No specific difficulties, just not enough time.</b></p>
</section>
<section>
  <h2>🙍 User Stories</h2>
  <h3>As a User, I would like to...</h3>
  <ul>
    <li>...browse a list of posts, sortable by ascending or descending order.</li>
    <li>...see a list of categories, and click on a category to see a list of posts in that category.</li>
    <li>...able to leave a comment sharing my thoughts on each post</li>
  </ul>
</section>
<section>
<h2>👷 Requirements</h2>
  <ul>
    <li>Created using create-next-app.</li>
    <li>Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.</li>
    <li>Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to.</li>
    <li>Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including post_id.</li>
    <li>Refresh the /posts route data when adding a new post, and redirect the user to the list of posts.</li>
    <li>Refresh the posts/:postId route when adding a new comment, so the new comment is displayed.</li>
  </ul>
</section>
<section>
<h2>🥅 Stretch Goals</h2>
  <ul>
    <li>Add a categories table to allow categorisation of posts at creation time using a dropdown menu. Add a /categories route that lists all categories, and a /categories/:id route that lists all posts in a category.</li>
    <li>Add a new /posts/:id/edit route that allows editing a post. Populate the form with the post data, and save changes by updating the post in the database with a server action.</li>
    <li>Add a delete button to the post page that removes the post from the database.</li>
    <li>Add a new /posts/:id/comments/:id/edit route that allows editing a comment. Populate the form with the comment data, and save changes by updating the comment in the database with a server action.</li>
  </ul>
</section>
<section>
  <h2>📁 Project Structure</h2>
  <h3>TS</h3>
  <ul>
    <li>My TS handler files are separate to the .TSX components. The .TS are in their own folder in /app.</li>
  </ul>
  <h3>Database</h3>
  <ul>
    <li>DBhandler.ts, seed.ts and queries.ts are all the local DB content.</li>
  </ul>
</section>
<section>
  <h2>✔️ Implementation (of Requirements)</h2>
    <p>Posts and Comments are accessible by clicking. They have individual forms for creating more. Tags are categories and they act as filters, however more cannot be added currently.</p>
</section>
<section>
  <h2>➕ Implementation (of Stretch Goals)</h2>
  <p>
    Implementation of category filtering (I call them tags).
  </p>
</section>
<section>
  <h2>🏆 Honorary Mentions</h2>
  <h3>TypeScript</h3>
  <span>...is the best. You can't change my mind.</span>
</section>
