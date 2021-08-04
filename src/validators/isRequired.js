const isRequired = (value) => ((!value && value !== 0) || !String(value).trim()) && "Required field";

export default isRequired;
