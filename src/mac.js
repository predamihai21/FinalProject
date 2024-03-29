import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showMacProducts);

function showMacProducts() {
    http.get('http://localhost:3000/products').then((data) => ui.showMacProducts(data));
}