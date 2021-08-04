import { get, keys, set } from "lodash";
import { useState } from "react";

export default function useForm({ initialValues, validations, onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setValue = (path, value) => {
    setValues({ ...set(values, path, value) });
  };

  const getValues = () => values;

  const getValue = (path, defaultValue = "") => get(values, path, defaultValue);

  const getErrors = () => {
    const errors = keys(validations).reduce((result, path) => {
      const errorMessage = getError(path);
      return errorMessage ? { ...result, [path]: errorMessage } : result;
    }, {});
    return keys(errors).length > 0 ? errors : null;
  };

  const getError = (path) =>
    validations[path].map((validator) => validator(getValue(path))).find((error) => error) || null;

  const submit = () => {
    setIsSubmitted(true);
    if (getErrors()) {
      return;
    }
    onSubmit({ ...values });
  };

  return {
    getValue,
    getValues,
    setValue,
    isSubmitted,
    submit,
    getError,
  };
}
