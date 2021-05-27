const PATH = "./data.json";
const fs = require("fs");

class Post {
  get() {
    //getposts
    return this.readData();
  }

  getIndividualBlog() {
    //get one blog post
  }

  add() {
    //add new post
  }

  readData() {
    let rawData = fs.readFileSync(PATH);
    let posts = JSON.parse(rawData);
    return posts;
  }
}

module.exports = Post;
