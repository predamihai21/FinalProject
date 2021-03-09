import { http } from './http.js';
import {ui} from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http.get('http://localhost:3000/products').then((data) => ui.showProducts(data));
}

// add product to db
document.getElementById('add-product').addEventListener('click', addNewProduct);
function addNewProduct() {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;
	const quantityValue = document.getElementById('quantity').value;

	let product = {
		title: titleValue,
		price: priceValue,
		image: imageValue,
		description: descriptionValue,
		quantity: quantityValue,
	};

	http.post('http://localhost:3000/products', product).then((data) => getProducts());
}


document.getElementById('products').addEventListener('click', deleteProduct);

function deleteProduct(e) {
	// console.log(e.target);
	if(e.target.classList.contains('delete')){
		const id = e.target.id;
		http.delete(`http://localhost:3000/products/${id}`)
		.then((data) => getProducts())
		.catch('Error on delete!');
	}
}














// showFirstPageProducts(products) {
// 	let output = '';
// 	products.forEach(product => {
// 		output +=`
// 		<div class="row">
// 			<div class="col-sm-6 col-md-4 col-lg-3 slick-slide slick-current slick-active product-grid">
// 				<div class="image">
// 					<a href="#">
// 					<img src="${product.image}" class="w-100" />
// 						<div class="overlay">
// 							<div class="detail">View Details</div>
// 						</div>
// 					</a>
// 				</div>
// 					<h5 class="text-center">${product.title}</h5>
// 					<h5 class="text-center">${product.price}</h5>
// 					<a href="#" class="btn buy">Buy</a>
// 					<a href="#" class="btn buy">Add to Cart</a>
// 				</div>
// 		`;
// 		this.firstPageDiv.innerHTML = output;
// 	});
// }
