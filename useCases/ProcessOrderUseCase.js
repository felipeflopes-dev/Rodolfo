class ProcessOrderUseCase {
  constructor(orderRepository, emailService) {
    this.orderRepository = orderRepository;
    this.emailService = emailService;
  }

  async execute(order) {
    this.validateOrder(order);

    const total = order.calculateTotal();

    await this.orderRepository.save(order);
    console.log('Pedido ' + order.orderId + ' salvo com sucesso');

    await this.emailService.sendOrderConfirmation(order.customerEmail, order);

    return {
      status: 'Sucesso',
      total: total
    };
  }

  validateOrder(order) {
    if (!order.orderId) {
      throw new Error('Pedido deve ter um ID');
    }

    if (!order.customerEmail) {
      throw new Error('Pedido deve ter email do cliente');
    }

    if (!Array.isArray(order.items) || order.items.length === 0) {
      throw new Error('Pedido deve ter pelo menos um item');
    }
  }
}

module.exports = ProcessOrderUseCase;
