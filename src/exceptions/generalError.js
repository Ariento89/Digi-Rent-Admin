export default class GeneralError extends Error {
  constructor(code, message) {
    super(code, message);
    this.code = code;
    this.message = message;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
