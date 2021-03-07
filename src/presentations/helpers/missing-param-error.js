module.exports = class MissingParamError extends Error {
  constructor(param) {
    super(`Missing ${param}`)
    this.name = 'MissingParamError'
  }
}
