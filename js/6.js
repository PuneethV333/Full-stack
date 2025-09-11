const refbtn = document.getElementsByTagName("button")[0];
const refP = document.getElementById("demo")

const getdata = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => {
            refP.innerText = res.data.title;
        })
        .catch((err) => {
            refP.innerText = err;
            console.log(err);
        })
}

refbtn.addEventListener("click",getdata)