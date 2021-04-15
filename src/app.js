import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
	//   getProducts();
	  initCart();
	});
	export function initCart() {
		const cartProductList = JSON.parse(localStorage.getItem("products"));
		if (!cartProductList) {
		  localStorage.setItem("products", JSON.stringify([]));
		}
	  }
