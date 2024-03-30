import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message:"Test get request"
    })
}

export function POST() {
    return NextResponse.json({
        message:"Test POST request"
    })
}