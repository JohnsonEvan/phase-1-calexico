// Write your code here...
let menu;
let dishName = document.querySelector("#dish-name");
let dishImg = document.querySelector("#dish-image");
let dishDescription = document.querySelector("#dish-description");
let dishPrice = document.querySelector("#dish-price")
let numberInBag = document.querySelector("#number-in-cart")
//grabs data from json
fetch("http://localhost:3000/menu")
.then(response => response.json())
.then(json => {
    menu = json;
    console.log(json);
    menu.forEach(menu => {
        createMenu(menu);
    });
    addingButton(menu);
})
// function to place menu items on side
function sideMenu(menu){
    let menuItems = document.querySelector("#menu-items");
    menuItems.appendChild()//i know i need this but i dont know why 
    createMenu(menu)
}

//adds details to the menu items
function createMenu(menu){
   dishName.textContent = menu.name;
   dishImg.src = menu.image;
   dishDescription.textContent = menu.description;
   dishPrice.textContent = menu.price;
}









//add functionality to add to cart button
let addingButton = (menu) => {
    let form = document.querySelector("#cart-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        numberInBag.textContent = parseInt.event.target['cart-amount'].value;
    });
}