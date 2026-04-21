import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const res = await fetch("https://arabiakhaleej-contact.asishchilakapati.workers.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return NextResponse.json({ status: 'error' }, { status: res.status });
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
