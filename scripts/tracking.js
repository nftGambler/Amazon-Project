import { cart } from "../data/cart.js";
import { products } from "../data/products.js";



let trackingSummaryHTML = '';

cart.forEach((cartItem) => {


  const productId = cartItem.productId

  let matchingProduct;


  products.forEach((product) => {
    if(product.id === productId) {
      matchingProduct = product
    }
  })

  trackingSummaryHTML += `


  <div class="order-tracking">
  <a class="back-to-orders-link link-primary" href="orders.html">
    View all orders
  </a>

  <div class="delivery-date">
    Arriving on 
  </div>

  <div class="product-info">
    ${matchingProduct.name}
  </div>

  <div class="product-info">
  ${cartItem.quantity}
  </div>

  <img class="product-image" src="${matchingProduct.image}">

  <div class="progress-labels-container">
    <div class="progress-label">
      Preparing
    </div>
    <div class="progress-label current-status">
      Shipped
    </div>
    <div class="progress-label">
      Delivered
    </div>
  </div>

  <div class="progress-bar-container">
    <div class="progress-bar"></div>
  </div>
</div>


  `;



})

document.querySelector('.js-main-tracking').innerHTML = trackingSummaryHTML;

