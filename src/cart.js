import { http } from './http.js';
import { ui } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  http.get("http://localhost:3000/products").then((data) => {
    ui.showCartProducts(data);
    cartTotal();
  });
});

//remove cart items
let productList = document.getElementById('tableCart');

productList.addEventListener('click', removeItems);
function removeItems(e){
    if (e.target.classList.contains ('delete')) {
        let removeItem = e.target.parentNode.parentNode;
        removeItem.remove();
        //remove bug message from function placeOrderBtn
        // location.reload();
    }
    //removed only content
    //need to remove from local storage too
    const id = e.target.id;
    // console.log(id);
    const cartList = JSON.parse(localStorage.getItem("products"));
    // console.log(cartList);
    for (let i =0; i<cartList.length; i++){
        if (cartList[i] ===id){
            cartList.splice(i,1);
            localStorage.setItem("products", JSON.stringify(cartList));
        }
    }
    cartTotal();

}

//calculate total price for cart

function cartTotal(){
    let tableProducts= document.getElementsByClassName("table-dark")[0];
    // console.log(tableProducts);
    let tableRows = tableProducts.getElementsByClassName("table-content");
    // console.log(tableRows);
    let total = 0;
    for(let i = 0; i < tableRows.length; i++){
        let tableRow = tableRows[i];
        let priceEle = tableRow.getElementsByClassName("price")[0];
        
        let quantityEle = tableRow.getElementsByClassName("form-control")[0];
        // let quantityValue= quantity.value=1;
        let price = parseFloat(priceEle.innerText);
        let quantity= quantityEle.value
        total =  total + price * quantity ;

        // console.log(price);
        // console.log(quantity);
    }
    total =Math.round(total *100) /100;
    let tva = Math.round(total * 0.19);
    document.getElementsByClassName("total")[0].innerText = "Total " + total + " Ron";
    document.getElementsByClassName("subTotal")[0].innerText = "Subtotal " + total + " Ron" ;
    document.getElementsByClassName("tva")[0].innerText = "VAT " + tva + " Ron" ;
}

// function for place order btn
document.getElementsByClassName("btn-success")[0].addEventListener('click', placeOrderBtn);
function placeOrderBtn() {
    let cartProducts = document.getElementsByClassName('cartProducts')[0];
    if (cartProducts.hasChildNodes()){
        ui.placeOrderBtnMessage();
    }
    else {
        ui.placeOrderBtnMessageError();
    }
}

