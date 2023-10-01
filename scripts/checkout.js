import {cart, removeFromCart, calculateCartQuantity,} from '../data/cart.js';
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

let cartSummaryHTML = '';



cart.forEach((cartItem) => {

  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product)=> {
    /*to find the matching product if it finds it then matching
    product is the product*/
    if(product.id === productId) {
      matchingProduct = product
    }
  });



cartSummaryHTML +=  `
<div class="cart-item-container
js-cart-item-container-${matchingProduct.id}">
<div class="delivery-date">
  Delivery date: 
</div>

<div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingProduct.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${matchingProduct.name}
    </div>
    <div class="product-price">
      $${formatCurrency(matchingProduct.priceCents)}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.quantity}</span>
      </span>

    <input class="quantity-input js-quantity-input-${matchingProduct.id}">
    <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>

      <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
        Delete
      </span>
    </div>
  </div>

  <div class="delivery-options">
    <div class="delivery-options-title">
      Choose a delivery option:
    </div>
    <div class="delivery-option">
      <input type="radio" checked
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Tuesday, June 21
        </div>
        <div class="delivery-option-price">

        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Wednesday, June 15
        </div>
        <div class="delivery-option-price">

        </div>
      </div>
    </div>
    <div class="delivery-option">
      <input type="radio"
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          Monday, June 13
        </div>
        <div class="delivery-option-price">
         
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  `;

});


//removing items

document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML

document.querySelectorAll('.js-delete-link')
  .forEach((link)=> {

    link.addEventListener('click', () => {
      const productId = link.dataset.productId
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`

      );
        container.remove();
      });

      calculateCartQuantity();

  });


function updateCartQuantity () {

  const cartQuantity = calculateCartQuantity();

document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} items`;
  
  document.querySelector('.order-summary-items').innerHTML = `items (${cartQuantity})`;

}

updateCartQuantity()


  let totalAmount = 0;

cart.forEach((cartItem) => {

  totalAmount += cartItem.totalPrice; 

  document.querySelector('.js-total-amount').innerHTML = (totalAmount/100).toFixed(2);
  document.querySelector('.js-total-befor-tax').innerHTML = (totalAmount/100 + 4.99).toFixed(2);
  document.querySelector('.js-total-order').innerHTML = (totalAmount/100 + 4.77 + 4.99).toFixed(2);
})




console.log(totalAmount)













