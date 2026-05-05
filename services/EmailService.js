class EmailService {
  async sendOrderConfirmation(recipientEmail, order) {
    throw new Error('Metodo sendOrderConfirmation() deve ser implementado');
  }
}

module.exports = EmailService;
