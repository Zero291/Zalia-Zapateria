
const menuEmail = document.querySelector(".navbar-email");
const menuEscritorio = document.querySelector('.desktop-menu');
const menuMovilClase = document.querySelector('.mobile-menu');
const menuMovil = document.querySelector('.menuMovil');
const shoppingCart = document.querySelector('.product-detail');
const shoppingCartButton = document.querySelector('.shopping-cart-button');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleMenuEscritorio);
menuMovil.addEventListener('click', toggleMenuMovil);
shoppingCartButton.addEventListener('click', botonShoppingCart);

function toggleMenuEscritorio(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
    menuEscritorio.classList.toggle('inactive');
}

function toggleMenuMovil(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive')
    }
    menuMovilClase.classList.toggle('inactive');
}

function botonShoppingCart(){
    const isMenuEscritorioOpen = menuEscritorio.classList.contains('inactive');
    const isMenuMovilClosed = menuMovil.classList.contains('inactive');

    if(!isMenuMovilClosed || isMenuEscritorioOpen){
        menuMovilClase.classList.add('inactive');
        menuEscritorio.classList.add('inactive');
    }
    shoppingCart.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Tv',
    price: 250,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Iphone',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

for (product of productList){
    const productCart = document.createElement('div');
    productCart.classList.add('product-card');

    //product = {name, price, image}
    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './Icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCart.appendChild(img);
    productCart.appendChild(productInfo);

    cardsContainer.appendChild(productCart);

}

