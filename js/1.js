const refHellobtn = document.querySelector("#hellobtn");
const refH1 = document.querySelector("h1");


const helloFn = () => {
    refH1.textContent = "Hello world";
}


refHellobtn.addEventListener("click",helloFn);