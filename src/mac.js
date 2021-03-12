// this


import { http } from './http.js';
import {ui} from './ui.js';

document.addEventListener('DOMContentLoaded', showMacProducts);

function showMacProducts() {
    http.get('http://localhost:3000/macs').then((data) => ui.showMacProducts(data));
}