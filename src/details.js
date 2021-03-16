import { http } from './http.js';
import {ui} from './ui.js';


window.onload= () => {
    if (window.location.search !== '') {
        const id = window.location.search.split('=')[1];

        // const category = window.location.search('category');
        // console.log(category);
        // const id = window.location.search.split('=')[1]; + &&category
        http 
                .get(`http://localhost:3000/products/${id}`)
                // .get(`http://localhost:3000/products/${id}`) / category


                .then((data) => ui.showDetails(data))
    }
}

// window.onload= () => {
//     if (window.location.search !== '') {
//         const id = window.location.search.split('=')[1];
//         http 
//                 .get(`http://localhost:3000/macs/${id}`)
//                 .then((data) => ui.showDetailsMacs(data))
//     }
// }

// window.onload= () => {
//     if (window.location.search !== '') {
//         const id = window.location.search.split('=')[1];
//         http 
//                 .get(`http://localhost:3000/ipads/${id}`)
//                 .then((data) => ui.showDetailsIpads(data))
//     }
// }



















































































// window.onload= () => { if (window.location.search !== '' && window.location.href.match('index.html' != null))
//  { const id = window.location.search.split('=')[1]; http .get(`http://localhost:3000/products/${id}`) .then((data) => ui.showDetails(data)) }
//  else if(window.location.search !== '' && window.location.href.match('mac.html' != null)){ const id = window.location.search.split('=')[1]; http .get(`http://localhost:3000/macs/${id}`) .then((data) => ui.showDetailsMacs(data)) }
//  else{ console.log("merge"); } }