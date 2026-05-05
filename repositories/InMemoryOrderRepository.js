const OrderRepository = require('./OrderRepository');

class InMemoryOrderRepository extends OrderRepository {
  constructor() {
    super();
    this.orders = [];
  }

  async save(order) {
    const existingIndex = this.orders.findIndex(savedOrder => {
      return savedOrder.orderId === order.orderId;
    });

    if (existingIndex !== -1) {
      this.orders[existingIndex] = order;
    } else {
      this.orders.push(order);
    }
  }

  async findById(orderId) {
    return this.orders.find(order => order.orderId === orderId) || null;
  }

  async findAll() {
    return [...this.orders];
  }
}

module.exports = InMemoryOrderRepository;
