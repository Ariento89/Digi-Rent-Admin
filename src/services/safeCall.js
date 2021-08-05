import GeneralError from "../exceptions/generalError";

const safeCall = (fn, errorCode, errorMessage) => {
  try {
    return fn();
  } catch (error) {
    throw new GeneralError(errorCode, errorMessage, error);
  }
};

export default safeCall;
