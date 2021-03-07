module.exports = class UnauthorizedError extends Error {
  constructor (param) {
    super('Unauthorized')
    this.name = 'MissingParamError'
  }
}
