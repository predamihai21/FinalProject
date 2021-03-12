import { http } from './http.js';
import {ui} from './ui.js';
// Get Products on DOM load
document.addEventListener('DOMContentLoaded', getProducts);

function getProducts() {
	// const http = new customHTTPMethods();
	http.get('http://localhost:3000/products').then((data) => ui.showProducts(data));
}

//iphones admin
document.addEventListener('DOMContentLoaded', getAllProducts);
function getAllProducts(){
	http.get('http://localhost:3000/products').then((data) => ui.showAllProducts(data));
}
//ipads admin
document.addEventListener('DOMContentLoaded', getAllIpads);
function getAllIpads(){
	http.get('http://localhost:3000/ipads').then((data) => ui.showProductsIpads(data));
}
//watch admin
document.addEventListener('DOMContentLoaded', getWatchProducts);
function getWatchProducts(){
	http.get('http://localhost:3000/ceasuri').then((data) => ui.showProductsWatches(data));
}
//mac admin
document.addEventListener('DOMContentLoaded', getMacProducts);

function getMacProducts(){
	http.get('http://localhost:3000/macs').then((data) => ui.showProductsMacs(data));
}



// add product to db
document.getElementById('add-product').addEventListener('click', addNewProduct);
function addNewProduct(e) {
	const titleValue = document.getElementById('title').value;
	const priceValue = document.getElementById('price').value;
	const imageValue = document.getElementById('image').value;
	const descriptionValue = document.getElementById('description').value;
	const quantityValue = document.getElementById('quantity').value;

	const categoryValue = document.getElementById('category').value;

	if(categoryValue == "products") {
		let product = {
			title: titleValue,
			price: priceValue,
			image: imageValue,
			description: descriptionValue,
			quantity: quantityValue,
		}
		http.post('http://localhost:3000/products', product).then((data) => getProducts());
	}
	else if(categoryValue == "macs") {
		let macs = {
			title: titleValue,
			price: priceValue,
			image: imageValue,
			description: descriptionValue,
			quantity: quantityValue,
			category: categoryValue,
		}
		http.post('http://localhost:3000/macs', macs).then((data) => getAllIpads());
	}
	
	else if(categoryValue == "ipads") {
		let ipads = {
			title: titleValue,
			price: priceValue,
			image: imageValue,
			description: descriptionValue,
			quantity: quantityValue,
		}
		http.post('http://localhost:3000/ipads', ipads).then((data) => getMacProducts());
	}

	else {
		let ceasuri = {
			title: titleValue,
			price: priceValue,
			image: imageValue,
			description: descriptionValue,
			quantity: quantityValue,
		}
		http.post('http://localhost:3000/ceasuri', ceasuri).then((data) => getWatchProducts());
	}

	e.preventDefault();
	
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


document.getElementById('ipaduri').addEventListener('click', deleteIpadsProduct);

function deleteIpadsProduct(e) {
	// console.log(e.target);
	if(e.target.classList.contains('delete')){
		const id = e.target.id;
		http.delete(`http://localhost:3000/ipads/${id}`)
		.then((data) => getAllIpads())
		.catch('Error on delete!');
	}
}

document.getElementById('ceasuri').addEventListener('click', deleteWatchProduct);

function deleteWatchProduct(e) {
	// console.log(e.target);
	if(e.target.classList.contains('delete')){
		const id = e.target.id;
		http.delete(`http://localhost:3000/ceasuri/${id}`)
		.then((data) => getWatchProducts())
		.catch('Error on delete!');
	}
}

document.getElementById('macs').addEventListener('click', deleteMacsProduct);

function deleteMacsProduct(e) {
	// console.log(e.target);
	if(e.target.classList.contains('delete')){
		const id = e.target.id;
		http.delete(`http://localhost:3000/macs/${id}`)
		.then((data) => getMacProducts())
		.catch('Error on delete!');
	}
}





