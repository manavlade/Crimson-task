import { CardDetails } from "@/components/CardDetails";

export default function PaperDetail({ params }: { params: { id: string } }) {
    return (
        <div>
           <CardDetails id={params.id} />
        </div>
    )
}