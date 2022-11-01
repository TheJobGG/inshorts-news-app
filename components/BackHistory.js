import { useRouter } from "next/router"

export default function BackHistory() {
    const router = useRouter()
    return (
        <button 
        type="button" 
        onClick={() => router.back()}
        style={{
            padding: '10px 40px',
            cursor: 'pointer'
        }}>
            ← Back
        </button>
    )
}
