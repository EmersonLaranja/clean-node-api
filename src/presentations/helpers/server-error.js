module.exports = class ServerError extends Error {
  constructor (param) {
    super('Oops!We have an internal error. Try again later')
    this.name = 'ServerError'
  }
}
