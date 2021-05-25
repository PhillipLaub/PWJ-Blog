My Blog Software Requirements

Goals

- Create a blog post to be able to share and stories and knowledge with others

User Stories

1. As a viewer, I want to see the list of blog psots so that I can see the blog and topics for me to choose
2. As a viewer, I want to view an individual blog post so that I can read all of its content
3. As a admin, I want to add a new blog post so that I can easily add content to my blog

User Flow

https://app.diagrams.net/#G1QsPIEZjUekdqKzd9LUOACY3j1UdW4vYs

Wireframe

https://www.figma.com/file/GyGJrTvns6LeoHNEX5HLoM/PWJ-BLOG?node-id=0%3A1

Business Requirements

- Pages
  - Home Page
  - Individual Blog Post Page
  - New Post Page
- Home Page
  - Display user profile image
  - Display list of blogs with Title, Date, Content
  - Limit the blog text to a certain height
- Individual Blog Post Page
  - Show the cover image, title, content, added date
  - Allow the user to go back to home page
- New Post Page
  - Allow a user to fill in title, content, and select the cover image
  - Store the added date

Technical Requirements

- Front End using Javascript
- Back End using NodeJS
  - REST API
- Database
  - JSON
- API Endpoints
  - Get List of Blog Posts
    - "api/posts"
  - Get Individual Blog
    - "api/posts/:post_id"
  - Post Blog Post
    - "api/posts"
