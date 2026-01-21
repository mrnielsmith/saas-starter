import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const priceId = request.nextUrl.searchParams.get('priceId');

  return NextResponse.json(
    {
      error: 'Paystack checkout is not configured yet.',
      priceId,
    },
    { status: 501 }
  );
}
