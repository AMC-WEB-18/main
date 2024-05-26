let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Masala Dosa',
        image: 'masala_dosa.png',
        price: 80
    },
    {
        id: 2,
        name: 'Paneer Tikka',
        image: 'paneer_tikka.PNG',
        price: 150
    },
    {
        id: 3,
        name: 'Butter Chicken',
        image: 'butter_chicken.PNG',
        price: 200
    },
    {
        id: 4,
        name: 'Chole Bhature',
        image: 'chole_bhature.PNG',
        price: 100
    },
    {
        id: 5,
        name: 'Pav Bhaji',
        image: 'pav_bhaji.PNG',
        price: 90
    },
    {
        id: 6,
        name: 'Samosa',
        image: 'samosa.PNG',
        price: 20
    },
    {
        id: 7,
        name: 'Chicken Biryani',
        image: 'chicken_biryani.PNG',
        price: 180
    },
    {
        id: 8,
        name: 'Veg Pulao',
        image: 'veg_pulao.PNG',
        price: 120
    },
    {
        id: 9,
        name: 'Pani Puri',
        image: 'pani_puri.PNG',
        price: 30
    },
    {
        id: 10,
        name: 'Rasgulla',
        image: 'rasgulla.PNG',
        price: 15
    },
    {
        id: 11,
        name: 'Idli Sambhar',
        image: 'idli_sambhar.png',
        price: '45'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../img/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list cart
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="../img/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
   


}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
