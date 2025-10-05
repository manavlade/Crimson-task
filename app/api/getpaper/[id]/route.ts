import { NextResponse } from "next/server"

export async function GET(request: Request, {params}: {params: {id: string}}) {

    try {
        const response = await fetch(`https://easydash.enago.com/acceptedpapers/${params.id}`);

        if (!response.ok) {
            return NextResponse.json({
                status: 400,
                message: "Failed to fetch accepted papers"
            })
        }

        const data = await response.json();

        return NextResponse.json({
            status: 200,
            data
        })

    } catch (error) {
        return NextResponse.json({
            status: 500,
            message: "Internal server error"
        })
    }

}