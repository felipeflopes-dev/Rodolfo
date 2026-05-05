class Order {
  constructor(orderId, customerEmail, items, couponCode = null) {
    this.orderId = orderId;
    this.customerEmail = customerEmail;
    this.items = items;
    this.couponCode = couponCode;
    this.createdAt = new Date();
  }

  calculateSubtotal() {
    return this.items.reduce((subtotal, item) => {
      return subtotal + item.calculateTotal();
    }, 0);
  }

  calculateDiscount() {
    const subtotal = this.calculateSubtotal();

    if (this.couponCode === 'PROMO10') {
      return subtotal * 0.1;
    }

    return 0;
  }

  calculateTotal() {
    return this.calculateSubtotal() - this.calculateDiscount();
  }
}

module.exports = Order;
