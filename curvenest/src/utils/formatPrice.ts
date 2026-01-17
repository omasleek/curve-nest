/**
 * Formats a price number to a currency string
 * @param price - The price to format
 * @param currency - The currency code (default: 'USD')
 * @returns Formatted price string
 */
export const formatPrice = (price: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};

/**
 * Formats a price for display with optional original price comparison
 * @param price - The current price
 * @param originalPrice - The original price (optional)
 * @returns Object with formatted prices
 */
export const formatPriceDisplay = (price: number, originalPrice?: number) => {
  const current = formatPrice(price);
  const original = originalPrice ? formatPrice(originalPrice) : null;
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return {
    current,
    original,
    discount: discount > 0 ? `${discount}% off` : null,
  };
};