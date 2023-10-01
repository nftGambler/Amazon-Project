// import {cart} from '../data/cart.js'

let paymentSummary = '';


paymentSummary += `

<div class="payment-summary-title">
Order Summary
</div>

<div class="payment-summary-row">
<div class="order-summary-items">Items (0):</div>
<div class="payment-summary-money js-total-amount">$0</div>
</div>

<div class="payment-summary-row">
<div>Shipping &amp; handling:</div>
<div class="payment-summary-money">$4.99</div>
</div>

<div class="payment-summary-row subtotal-row">
<div>Total before tax:</div>
<div class="payment-summary-money js-total-befor-tax">$0</div>
</div>

<div class="payment-summary-row">
<div>Estimated tax (10%):</div>
<div class="payment-summary-money">$4.77</div>
</div>

<div class="payment-summary-row total-row">
<div>Order total:</div>
<div class="payment-summary-money js-total-order">$0.00</div>
</div>

<button class="place-order-button button-primary">
Place your order
</button>

`
document.querySelector('.js-payment-summary')
  .innerHTML = paymentSummary


   