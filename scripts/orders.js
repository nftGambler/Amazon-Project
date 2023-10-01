import { cart, calculateCartQuantity } from "../data/cart.js";
import { products } from "../data/products.js";


let orderSummaryHTML = '';


cart.forEach((cartItem) => {

  const productId = cartItem.productId;



  let matchingProduct;


  products.forEach((product) => {
    if(product.id === productId) {
      matchingProduct = product
    }
  });

  orderSummaryHTML += `



      <div class="orders-grid">
        <div class="order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div></div>
              </div>
              <div class="order-total">
       
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${matchingProduct.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
            <div class="product-image-container">
              <img src="${matchingProduct.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-delivery-date">
                Arriving on: 
              </div>
              <div class="product-quantity">
                  ${cartItem.quantity}
              </div>
              <button class="buy-again-button button-primary">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>
          
            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary">
                  Track package
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>


  `;

});

document.querySelector('.js-main-order').innerHTML = orderSummaryHTML;



function updateCartQuantity () {

  const cartQuantity = calculateCartQuantity();
document.querySelector('.cart-quantity').innerHTML = cartQuantity
  
}

updateCartQuantity()




