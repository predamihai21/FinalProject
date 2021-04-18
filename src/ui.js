import { btnAddToCart } from "./details.js";
class UI {
    constructor () {
        this.productsDiv = document.getElementById('products');
        this.firstPageDiv = document.getElementById('first');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.image = document.getElementById('image');
        this.quantity = document.getElementById('quantity');
        this.description = document.getElementById('description');

        // this
        this.macsDiv = document.getElementById('macs');

        this.ipadDiv = document.getElementById('ipad');

        this.watchDiv = document.getElementById('watch');

        this.ipadsDiv = document.getElementById('ipaduri');

        this.ceasuriDiv = document.getElementById('ceasuri');


        this.iphoneDiv = document.getElementById('iPhones');


        //details
        this.detailsDiv = document.getElementById('detailsPage');


        //cart
        this.tableCart = document.getElementById('tableCart');
    }

    // admin show all products
    showProducts(products) {
        let output = '';
        products.forEach(product => {
            output +=`
            <table class="table table-striped table-dark">
                <tbody>
                    <tr>
                        <td><img src="${product.image}" class="img-thumbnail"/></td>
                        <td>${product.title}</td>
                        <td>${product.description}</td>
                        <td id="productQuantity">${product.quantity} pcs</td>
                        <td id="productPrice">${product.price} Ron</td>
                        <td><button class="btn btn-sm btn-danger delete" id="${product.id}">x</button></td>
                    </tr>
                </tbody>
            </table>
            `;
        });
        this.productsDiv.innerHTML = output;
    }


    // show all products on index html 
    showAllProducts(products) {
        let output = '';
        products.forEach(product => {
            output +=`
                            <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                                    <div class="image">
                                        <a href="details.html?id=${product.id}">
                                            <img src="${product.image}" id="image" class="w-100" />
                                        </a>
                                    </div>
                                    <h5 class="text-center">${product.title}</h5>
                                    <h5 class="text-center">Price: ${product.price} Ron</h5>
                                    <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                            </div>

            `;
            this.firstPageDiv.innerHTML = output;
        });
    }

    // show macs on mac html
    showMacProducts(products) {
        let output = '';
        products.forEach(product => {
            if(product.category == "mac"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="details.html?id=${product.id}">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <p class="card-text">${product.description}</p>
                            <h5 class="text-center">Pret: ${product.price} Ron</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${product.power}</li>
                                <li class="list-group-item">${product.ram}</li>
                                <li class="list-group-item">${product.hard}</li>
                                <li class="list-group-item">${product.monitor}</li>
                            </ul>
                            <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                        </div>
                    `;
            this.macsDiv.innerHTML = output;
            }
        });
    }

    // show ipad on ipad html
    showIpadProducts(products) {
        let output = '';
        products.forEach(product => {
            if(product.category == "iPad"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="details.html?id=${product.id}">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                        </div>
                    `;
            this.ipadDiv.innerHTML = output;
            }
        });
    
    }


    // show watches on watch html
    showWatchProducts(products) {
        let output = '';
        products.forEach(product => {
            if(product.category == "watch"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="details.html?id=${product.id}">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                        </div>
                    `;
            this.watchDiv.innerHTML = output;
            }
        });
    }

    //show iphone on iphone html

    showIphonesProductsOnly(products) {
        let output = '';
        products.forEach(product => {
            if(product.category == "iPhone"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="details.html?id=${product.id}">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                        </div>
                    `;
            this.iphoneDiv.innerHTML = output;
            }
        });
    }

    //show details for all products

    showDetails(products){
        let output ='';
        output = `
                    <div class="card-wrapper">
                            <div class="product-imgs">
                                <div class="img-display">
                                    <div class="img-showcase">
                                    <img src="${products.image}" id="image" class="w-100" />
                                    </div>
                                </div>
                            </div>
                                <div class="product-content">
                                    <h2 class="product-title">${products.title}</h2>
                                    <div class="product-price">
                                        <p class="blue-price">Price: <span>${products.price} Ron</span></p>
                                    </div>
                                    <div class="product-detail">
                                        <h2>about this item:</h2>
                                        <p>${products.description}</p>
                                        <ul class="product-desc">
                                            <li>Quantity available: <span>${products.quantity}</span></li>
                                            <li>Category: <span>${products.category}</span></li>
                                            <li>Shipping Area: <span>All over the world</span></li>
                                            <li>Shipping Fee: <span>Free</span></li>
                                        </ul>
                                    </div>
                                    <div class="purchase-info">
                                        <button type="button" class="btn" id="${products.id}" >Add to Cart <i class="fas fa-shopping-cart"></i></button>
                                    </div>
                                </div>
                    </div>
        `;
        this.detailsDiv.innerHTML = output;
        btnAddToCart();
    }
    


    showCartProducts(products) {
        let output = '';
        const productsIdArr = JSON.parse(localStorage.getItem("products"));
        //   console.log(productsIdArr);
        let productID ="";
        for (let i =0 ; i < productsIdArr.length ;i++ ) {
            productID = productsIdArr[i];
            products.forEach((product) => {
                if ( productID == product.id ) {
                output += ` <tr class="table-content">
                                <td><img src="${product.image}" class="img-thumbnail"/></td>
                                <td><a href="details.html?id=${product.id}">${product.title}</a></td>
                                <td>${product.category}</td>
                                <td class ="price">${product.price} Ron</td>
                                <td>
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select></td>
                                <td><button class="btn btn-sm btn-danger delete" id="${product.id}">x</button></td>
                            </tr>
                `;
                this.tableCart.innerHTML = output;
            }
        });
    }
}

    addToCartMessage() {
        let message = document.createElement('div');
        message.innerHTML=`
                        <div class="alert alert-dark" role="alert">
                            Your product has been added to <a href="cart.html" class="alert-link">Cart</a>
                        </div>`
        let ele = document.getElementById('childElement');
        let divEle = ele.parentNode;
        divEle.insertBefore(message, ele);

        setTimeout(() => {
            message.remove();
        }, 4000);
    }


    placeOrderBtnMessage(){
        let orderMessage = document.createElement('p');
        orderMessage.innerHTML= `<div class= "container">
                                <div class="alert alert-success" role="alert">
                                    <h4 class="alert-heading">Well done!</h4>
                                    <p>Thank you for your order !</p>
                                </div>
                            </div>`
        let firstEle =  document.getElementById('productContainer');
        let parentEle = firstEle.parentNode;
        parentEle.insertBefore(orderMessage, firstEle);

        setTimeout(() => {
            orderMessage.remove();
        }, 2800);
    }

    placeOrderBtnMessageError(){
        let orderMessage = document.createElement('p');
        orderMessage.innerHTML= `<div class= "container">
                                    <div class="alert alert-danger" role="alert">
                                        Please add products to cart !
                                    </div>
                            </div>`
        let firstEle =  document.getElementById('productContainer');
        let parentEle = firstEle.parentNode;
        parentEle.insertBefore(orderMessage, firstEle);

        setTimeout(() => {
            orderMessage.remove();
        }, 4000);
    }
}

export const ui = new UI();

