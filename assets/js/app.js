const loadPost = () => {
  fetch("https://my-blog-1772.onrender.com/post/list/")
    .then((res) => res.json())
    .then((data) => displayPost(data))
    .catch((err) => console.log(err));
};

const displayPost = (posts) => {
    console.log(posts);
  posts.forEach((post) => {
    const parent = document.getElementById("all-post");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="col-4 col-12-medium">
      <section class="highlight">
        <small> Created Time : ${post.created_on}</small>
        <a href="#" class="image featured"><img src="${post.post_image}" alt="" /></a>
        <h1>Post Author : ${post.user.first_name}</h1>
        <h3><a href="#">${post.caption}</a></h3>
        <p>${post.body.slice(0,200)} <a style="font-weight:bold" href="left-sidebar.html?post_id=${post.id}">see more....</a></p>
      </section>
      </div>
    `;
    parent.appendChild(div);
  });
};

loadPost();
