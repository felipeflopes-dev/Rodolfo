class OrderRepository {
  async save(order) {
    throw new Error('Metodo save() deve ser implementado');
  }

  async findById(orderId) {
    throw new Error('Metodo findById() deve ser implementado');
  }

  async findAll() {
    throw new Error('Metodo findAll() deve ser implementado');
  }
}

module.exports = OrderRepository;
