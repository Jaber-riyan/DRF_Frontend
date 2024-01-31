const loadPost = () => {
  fetch("https://my-blog-1772.onrender.com/post/list/")
    .then((res) => res.json())
    .then((data) => displayPost(data))
    .catch((err) => console.log(err));
};

const displayPost = (posts) => {
  console.log(posts);
  let coutn = 0;
  posts.forEach((post) =>
  {
    coutn=coutn+1;
  })
  console.log(coutn);
  document.getElementById('total_post').innerHTML=`
    <h1>Total ${coutn} Posts</h1>
  `
  posts.forEach((post) => {
    const parent = document.getElementById("all-post");
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="col-4 col-12-medium">
      <section class="highlight">
        <small> Created Time : ${post.created_on}</small>
        <a href="#" class="image featured"><img src="${post.post_image}" alt="" /></a>
        <h3><a href="#">${post.caption}</a></h3>
        <p><b>${post.body.slice(0, 200)} </b><a style="font-weight:bold" href="left-sidebar.html?post_id=${post.id}"><b>see more....</b></a></p>
      </section>
      </div>
    `;
    parent.appendChild(div);
  });
};

const getValue = (id) => {
  const value = document.getElementById(id).value;
  return value;
};


const add_post = (event) => {
  event.preventDefault();
  const caption = getValue("caption");
  const body = getValue("body");
  const imageInput = document.getElementById("image");
  const imageFile = imageInput.files[0];
  const user_id = localStorage.getItem("user_id");

  const formData = new FormData();
  formData.append("caption", caption);
  formData.append("body", body);
  formData.append("post_image", imageFile);
  formData.append("user", user_id);

  fetch("https://my-blog-1772.onrender.com/post/list/", {
      method: "POST",
      body: formData,
  })
  .then((res) => res.json())
  .then((data) => {
      console.log(data);
  });

  alert("Post Add Successfully");
  window.location.href = "index.html";
};


loadPost();
