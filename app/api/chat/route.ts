import { NextResponse } from 'next/server'

import { getChat } from './chat'

export async function GET() {
    const currentCount = getChat()

    return NextResponse.json(currentCount)
}
