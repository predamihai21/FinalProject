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
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td><button class="btn btn-sm btn-danger delete" id="${product.id}"><i class="far fa-trash-alt"></i></button></td>
                    </tr>
                </tbody>
            </table>
            `;
        });
        this.productsDiv.innerHTML = output;
    }


    // all products for index html => store.html
    showAllProducts(products) {
        let output = '';
        products.forEach(product => {
            output +=`
                            <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                                    <div class="image">
                                        <a href="#">
                                            <img src="${product.image}" id="image" class="w-100" />
                                        </a>
                                    </div>
                                    <h5 class="text-center">${product.title}</h5>
                                    <h5 class="text-center">Price: ${product.price} Ron</h5>
                                    <a href="#" class="btn buy">Buy</a>
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
                                <a href="#">
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
                            <a href="#" class="btn buy">Buy</a>
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
                                <a href="#">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="#" class="btn buy">Buy</a>
                            <a href="details.html?id=${product.id}" class="btn buy id="${ipad.id}">Details</a>
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
            if(product.category == "ceasuri"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="#">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="#" class="btn buy">Buy</a>
                            <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                        </div>
                    `;
            this.watchDiv.innerHTML = output;
            }
        });
    }

    //show iphone for iphone html

    showIphonesProductsOnly(products) {
        let output = '';
        products.forEach(product => {
            if(product.category == "iPhone"){
            output +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="#">
                                    <img src="${product.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${product.title}</h5>
                            <h5 class="text-center">Price: ${product.price} Ron</h5>
                            <a href="#" class="btn buy">Buy</a>
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
                                        <img src="${products.image}" />
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
                                        <ul>
                                            <li>Available: <span>in stock</span></li>
                                            <li>Category: <span>${products.category}</span></li>
                                            <li>Shipping Area: <span>All over the world</span></li>
                                            <li>Shipping Fee: <span>Free</span></li>
                                        </ul>
                                    </div>
                                    <div class="purchase-info">
                                        <input type="number" min="0" max="5" value="1" />
                                        <button type="button" class="btn">Add to Cart <i class="fas fa-shopping-cart"></i></button>
                                    </div>
                                </div>
                    </div>
        `;
        this.detailsDiv.innerHTML = output;
    }

}

export const ui = new UI();