let posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      lastActivityTime = new Date().toISOString();
      console.log("User's Last Activity Time Updated:", lastActivityTime);
      resolve(lastActivityTime);
    }, 1000); // 1 second delay
  });
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      console.log("Post Created:", post);
      resolve(posts);
    }, 1000); // 1 second delay
  });
}

function deleteLastPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        console.log("Deleted Post:", deletedPost);
        resolve(posts);
      } else {
        reject("No posts to delete");
      }
    }, 1000); // 1 second delay
  });
}

function displayPostsAndActivity() {
  Promise.all([createPost("First post"), updateLastUserActivityTime()])
    .then(([updatedPosts, updatedTime]) => {
      console.log("All Posts:", updatedPosts);
      console.log("Last Activity Time:", updatedTime);
      return deleteLastPost();
    })
    .then(remainingPosts => {
      console.log("Remaining Posts:", remainingPosts);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });
}

// Calling the function to demonstrate the flow
displayPostsAndActivity();