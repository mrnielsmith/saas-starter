import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json(
    { error: 'Paystack webhook handling is not configured yet.' },
    { status: 501 }
  );
}
