class OrderItem {
  constructor(productName, unitPrice, quantity) {
    this.productName = productName;
    this.unitPrice = unitPrice;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.unitPrice * this.quantity;
  }
}

module.exports = OrderItem;
