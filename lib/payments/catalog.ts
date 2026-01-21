export type PaymentProduct = {
  id: string;
  name: string;
  description: string;
  defaultPriceId: string;
};

export type PaymentPrice = {
  id: string;
  productId: string;
  unitAmount: number;
  currency: string;
  interval: string;
  trialPeriodDays: number;
};

const catalog = {
  products: [
    {
      id: 'base',
      name: 'Base',
      description: 'Base subscription plan',
      defaultPriceId: 'price_base',
    },
    {
      id: 'plus',
      name: 'Plus',
      description: 'Plus subscription plan',
      defaultPriceId: 'price_plus',
    },
  ],
  prices: [
    {
      id: 'price_base',
      productId: 'base',
      unitAmount: 800,
      currency: 'ZAR',
      interval: 'month',
      trialPeriodDays: 7,
    },
    {
      id: 'price_plus',
      productId: 'plus',
      unitAmount: 1200,
      currency: 'ZAR',
      interval: 'month',
      trialPeriodDays: 7,
    },
  ],
} as const;

export function getPaymentCatalog() {
  return {
    products: [...catalog.products],
    prices: [...catalog.prices],
  };
}
