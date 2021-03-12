import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showWatchProducts);

function showWatchProducts() {
    http.get('http://localhost:3000/ceasuri').then((data) => ui.showWatchProducts(data));
}