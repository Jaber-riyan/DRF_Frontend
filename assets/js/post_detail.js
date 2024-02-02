const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("post_id");
    fetch(`https://my-blog-1772.onrender.com/post/list/${param}`)
        .then((res) => res.json())
        .then((data) => postDetail(data));

    fetch(`http://127.0.0.1:8000/post/comment/?post_id=${param}`)
        .then((res) => res.json())
        .then((data) => commentDetail(data));
};


const postDetail = (post) => {
    const parent = document.getElementById("content");
    parent.innerHTML = `
    <article class="box post">
        <header class="style1">
            <p>Created Time : ${post.created_on} </p>
            <h2> ${post.caption} </h2>
        </header>
        <a href="#" class="image featuredd">
            <img src=" ${post.post_image} " alt="" />
        </a>
        <p>${post.body}</p>
    </article> 
    `;
};
const commentDetail = (comments) => {
    const parent = document.getElementById("comment");
    comments.forEach((comment) => {
        let user
        fetch(`http://127.0.0.1:8000/user/list/${comment.user}`)
            .then((res) => res.json())
            .then((data) => {
                user = getUser(data)
                console.log(user);
                parent.innerHTML += `
                <div class="card-body border m-3 p-2 shadow rounded-2">
                    <b>${user.first_name} ${user.last_name} </b>
                    <small>, ${comment.created_on}</small>
                    <p>....${comment.body}</p>
                </div> 
                `;
            });

    });
};
 
function getUser(data) 
{
    const firstName = data.first_name
    const lastName = data.last_name
    return{
        first_name: firstName,
        last_name: lastName
    }
}

// const handleComment = () =>
// {
//     const comment_body = document.getElementById("comment-body").value
//     console.log(comment_body);
//     window.location.href = "view_detail2.html";
// }

getparams()