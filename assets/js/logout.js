const handlelogOut = () => {
    const token = localStorage.getItem("token");
  
    fetch("https://my-blog-1772.onrender.com/user/login/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        alert("Logout Successfully")
        window.location.href = "index.html";
      });
  };