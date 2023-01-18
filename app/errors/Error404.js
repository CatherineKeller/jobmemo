class Error404 extends Error {
  constructor() {
    super('Ressource not found');
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

module.exports = Error404;
