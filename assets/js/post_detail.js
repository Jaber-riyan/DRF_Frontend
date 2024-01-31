const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("post_id");
    console.log(param);
    fetch(`https://my-blog-1772.onrender.com/post/list/${param}`)
        .then((res) => res.json())
        .then((data) => postDetail(data));

    // fetch(`https://testing-8az5.onrender.com/doctor/review/?doctor_id=${param}`)
    //   .then((res) => res.json())
    //   .then((data) => doctorReview(data));
};


const postDetail = (post) => {
    console.log(post);
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

getparams()