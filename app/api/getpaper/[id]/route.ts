import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const response = await fetch(`https://easydash.enago.com/acceptedpapers/${id}`);

        if (!response.ok) {
            return NextResponse.json({
                status: 400,
                message: "Failed to fetch accepted papers",
            });
        }

        const data = await response.json();

        return NextResponse.json({
            status: 200,
            data,
        });
    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error",
        });
    }
}
