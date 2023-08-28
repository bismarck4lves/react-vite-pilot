export const isNumber = (val) => {
  const numericVal = Number(val);
  return !isNaN(numericVal);
};
