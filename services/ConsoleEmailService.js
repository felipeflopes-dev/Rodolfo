const EmailService = require('./EmailService');

class ConsoleEmailService extends EmailService {
  async sendOrderConfirmation(recipientEmail, order) {
    console.log('Enviando e-mail para ' + recipientEmail);
    console.log('Pedido: ' + order.orderId);
    console.log('Total: R$ ' + order.calculateTotal());

    return Promise.resolve();
  }
}

module.exports = ConsoleEmailService;
