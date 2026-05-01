import { NextResponse } from 'next/server';
import { getMarketplaceProducts } from '@/lib/marketplace/service';

export async function GET() {
  try {
    const response = await getMarketplaceProducts();
    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json({ 
      status: 'error', 
      message: error.message || 'Failed to aggregate products' 
    }, { status: 500 });
  }
}
