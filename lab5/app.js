let product = document.getElementById("pro");
let quanity = document.getElementById("quanity");
let btnClick = document.getElementById("btn-ok");
let name = document.getElementById("name");
let amount = document.getElementById("amount");

let display = () => {
    let price = product.dataset.price;
    let value = quanity.value;
    name.innerText = product.innerHTML;
    amount.innerText = +price * +value;
}

btnClick.addEventListener("click", e => {
    display();
})