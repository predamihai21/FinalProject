import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showIpadProducts);

function showIpadProducts() {
    http.get('http://localhost:3000/products').then((data) => ui.showIpadProducts(data));
}