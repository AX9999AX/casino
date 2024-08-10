import { NextResponse } from 'next/server'

import { getCounter } from './chat'

export async function GET() {
    const currentCount = getCounter()

    return NextResponse.json({ count: currentCount })
}
