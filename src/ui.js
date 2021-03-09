class UI {
    constructor () {
        this.productsDiv = document.getElementById('products');
        this.firstPageDiv = document.getElementById('first');
        this.title = document.getElementById('title');
        this.price = document.getElementById('price');
        this.image = document.getElementById('image');
        this.quantity = document.getElementById('quantity');
    }

    showProducts(products) {
        let output = '';
        products.forEach(product => {
            output +=`
            <table class="table table-striped table-dark">
                <tbody>
                    <tr>
                        <td><img src="${product.image}" class="img-thumbnail"/></td>
                        <td>${product.title}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td><button class="btn btn-sm btn-danger" id="${product.id}">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            `;
            this.productsDiv.innerHTML = output;
        });
    }


}

export const ui = new UI();