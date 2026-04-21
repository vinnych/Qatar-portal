import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch("https://freeipapi.com/api/json", {
      next: { revalidate: 86400 } // Cache for 24 hours
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
