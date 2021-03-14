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


        //details
        this.detailsDiv = document.getElementById('detailsPage');
    }
    // admin show products
    // iphones
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
                        <td><button class="btn btn-sm btn-danger delete" id="${product.id}">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            `;
            // this.productsDiv.innerHTML = output;
        });
        this.productsDiv.innerHTML = output;
    }
    // macs
    showProductsMacs(macs) {
        let output2 = '';
        macs.forEach(mac => {
            output2 +=`
            <table class="table table-striped table-dark">
                <tbody>
                    <tr>
                        <td><img src="${mac.image}" class="img-thumbnail"/></td>
                        <td>${mac.title}</td>
                        <td>${mac.description}</td>
                        <td>${mac.quantity}</td>
                        <td>${mac.price}</td>
                        <td><button class="btn btn-sm btn-danger delete" id="${mac.id}">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            `;
            this.macsDiv.innerHTML = output2;
        });
    }
    // ceasuri
    showProductsWatches(ceasuri) {
        let output3 = '';
        ceasuri.forEach(ceas => {
            output3 +=`
            <table class="table table-striped table-dark">
                <tbody>
                    <tr>
                        <td><img src="${ceas.image}" class="img-thumbnail"/></td>
                        <td>${ceas.title}</td>
                        <td>${ceas.description}</td>
                        <td>${ceas.quantity}</td>
                        <td>${ceas.price}</td>
                        <td><button class="btn btn-sm btn-danger delete" id="${ceas.id}">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            `;
            this.ceasuriDiv.innerHTML = output3;
        });
    }
    // ipaduri
    showProductsIpads(ipads) {
        let output4 = '';
        ipads.forEach(ipad => {
            output4 +=`
            <table class="table table-striped table-dark">
                <tbody>
                    <tr>
                        <td><img src="${ipad.image}" class="img-thumbnail"/></td>
                        <td>${ipad.title}</td>
                        <td>${ipad.description}</td>
                        <td>${ipad.quantity}</td>
                        <td>${ipad.price}</td>
                        <td><button class="btn btn-sm btn-danger delete" id="${ipad.id}">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            `;
            this.ipadsDiv.innerHTML = output4;
        });
    }






    // all products for index html
    showAllProducts(products) {
        let output5 = '';
        products.forEach(product => {
            output5 +=`
                            <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                                    <div class="image">
                                        <a href="#">
                                            <img src="${product.image}" id="image" class="w-100" />
                                        </a>
                                    </div>
                                    <h5 class="text-center">${product.title}</h5>
                                    <h5 class="text-center">Pret: ${product.price} Ron</h5>
                                    <a href="#" class="btn buy">Buy</a>
                                    <a href="details.html?id=${product.id}" class="btn buy id="${product.id}">Details</a>
                            </div>

            `;
            this.firstPageDiv.innerHTML = output5;
        });
    }

    // this
    showMacProducts(macs) {
        let output6 = '';
        macs.forEach(mac => {
            output6 +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="#">
                                    <img src="${mac.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${mac.title}</h5>
                            <p class="card-text">${mac.description}</p>
                            <h5 class="text-center">Pret: ${mac.price} Ron</h5>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">${mac.power}</li>
                                <li class="list-group-item">${mac.ram}</li>
                                <li class="list-group-item">${mac.hard}</li>
                                <li class="list-group-item">${mac.monitor}</li>
                            </ul>
                            <a href="#" class="btn buy">Buy</a>
                            <a href="#" class="btn buy">Add to Cart</a>
                        </div>
                    `;
            this.macsDiv.innerHTML = output6;
        });
    }

    showIpadProducts(ipads) {
        let output7 = '';
        ipads.forEach(ipad => {
            output7 +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="#">
                                    <img src="${ipad.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${ipad.title}</h5>
                            <h5 class="text-center">Pret: ${ipad.price} Ron</h5>
                            <a href="#" class="btn buy">Buy</a>
                            <a href="#" class="btn buy">Add to Cart</a>
                        </div>
                    `;
            this.ipadDiv.innerHTML = output7;
        });
    }



    showWatchProducts(ceasuri) {
        let output8 = '';
        ceasuri.forEach(ceas => {
            output8 +=`
                        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
                            <div class="image">
                                <a href="#">
                                    <img src="${ceas.image}" id="image" class="w-100" />
                                </a>
                            </div>
                            <h5 class="text-center">${ceas.title}</h5>
                            <h5 class="text-center">Pret: ${ceas.price} Ron</h5>
                            <a href="#" class="btn buy">Buy</a>
                            <a href="#" class="btn buy">Add to Cart</a>
                        </div>
                    `;
            this.watchDiv.innerHTML = output8;
        });
    }





    showDetails(product){
        let output ='';
        output = `
        <div class="col-sm-6 col-md-4 col-lg-2  product-grid">
            <div class="image">
                <a href="#">
                    <img src="${product.image}" id="image" class="w-100" />
                </a>
            </div>
            <h5 class="text-center">${product.title}</h5>
            <h5 class="text-center">Pret: ${product.price} Ron</h5>
            <a href="#" class="btn buy">Buy</a>
            <a href="#" class="btn buy">Add to Cart</a>
        </div>
        `;
        this.detailsDiv.innerHTML = output;
    }
}

export const ui = new UI();