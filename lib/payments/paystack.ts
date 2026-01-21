import { redirect } from 'next/navigation';
import { Team } from '@/lib/db/schema';
import { getUser } from '@/lib/db/queries';
import { getPaymentCatalog } from './catalog';

const paystackEnabled = Boolean(process.env.PAYSTACK_SECRET_KEY);

export async function createCheckoutSession({
  team,
  priceId,
}: {
  team: Team | null;
  priceId: string;
}) {
  const user = await getUser();

  if (!team || !user) {
    redirect(`/sign-up?redirect=checkout&priceId=${priceId}`);
  }

  if (!paystackEnabled) {
    redirect(`/dashboard?billing=local&priceId=${priceId}`);
  }

  redirect(`/api/paystack/checkout?priceId=${priceId}`);
}

export async function createCustomerPortalSession(team: Team) {
  if (!team.paystackCustomerId) {
    return { url: '/pricing' };
  }

  if (!paystackEnabled) {
    return { url: '/dashboard?billing=local' };
  }

  return { url: `/api/paystack/portal?teamId=${team.id}` };
}

export async function getPaystackPrices() {
  const { prices } = getPaymentCatalog();
  return prices;
}

export async function getPaystackProducts() {
  const { products } = getPaymentCatalog();
  return products;
}
