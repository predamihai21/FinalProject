import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showAllProducts);

function showAllProducts(){
    http.get('http://localhost:3000/products')
    .then((data) => ui.showAllProducts(data))
}

