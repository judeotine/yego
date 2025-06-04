
export const formatUGX = (amount: number): string => {
  return new Intl.NumberFormat('en-UG', {
    style: 'currency',
    currency: 'UGX',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('USh', 'UGX');
};

export const formatPrice = (amount: number): string => {
  return `UGX ${amount.toLocaleString()}`;
};
