// Legacy type - kept for backward compatibility
// New pricing uses ServicePrice from @/stripe/pricingData
export type Price = {
  id: string;
  unit_amount: number;
  nickname: string;
  offers: string[];
};
