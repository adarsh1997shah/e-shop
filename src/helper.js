// For currency formatting.
export const getFormatCurrency = (currency, number) => {
  const formatCurrency = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    currencyDisplay: 'narrowSymbol',
  }).format(number);

  return formatCurrency;
};

export const getTotalProductAmount = prices => {
  let sum = 0;

  const total = prices.reduce((total, acc) => total + acc, sum);

  return total;
};
