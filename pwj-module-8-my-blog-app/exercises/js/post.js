/**
 * TODO (Together): Create getPostIdParam to get the id of the post to use in the request later
 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPost();
};

const getPostIdParam = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get("id");
};

const getPost = () => {
  // CODE GOES HERE
  const postId = getPostIdParam();
  const url = `${API_URL}${postId}`;
  fetch(url, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      buildPost(data);
    });
};

const buildPost = (data) => {
  // HINT: Convert the date number to a Date string
  let blogPostsContent = "";
  let blogPost = data;

  const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
  const postImage = `${API_BASE_URL}${blogPost.post_image}`;
  blogPostsContent += `
    <div class="post-container">
            <div id="individual-post-title">${blogPost.title}</div>
            <div id="individual-post-date">${postDate}</div>
            <div id="individual-post-content">
              ${blogPost.content}
            </div>
          </div>
        `;
  document.querySelector(".post-container").innerHTML = blogPostsContent;
  document.querySelector("header").style.backgroundImage = `url(${postImage})`;
};
