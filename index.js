const Order = require('./entities/Order');
const OrderItem = require('./entities/OrderItem');
const InMemoryOrderRepository = require('./repositories/InMemoryOrderRepository');
const ConsoleEmailService = require('./services/ConsoleEmailService');
const ProcessOrderUseCase = require('./useCases/ProcessOrderUseCase');

async function main() {
  const order = new Order(
    '001',
    'cliente@email.com',
    [
      new OrderItem('Notebook', 2000, 1),
      new OrderItem('Mouse', 50, 2)
    ],
    'PROMO10'
  );

  const orderRepository = new InMemoryOrderRepository();
  const emailService = new ConsoleEmailService();
  const processOrderUseCase = new ProcessOrderUseCase(orderRepository, emailService);

  const result = await processOrderUseCase.execute(order);

  console.log(result);
}

main().catch(error => {
  console.error('Erro:', error.message);
});
