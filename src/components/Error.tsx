export default function Error({ error }: { error: string }) {
    return (
        <div className="container">
            <h1>Oops! Something went wrong...</h1>
            <p>{error}</p>
        </div>
    )
}