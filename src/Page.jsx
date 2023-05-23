export default function Page({ children, className = '' }) {
    return (
        <section className={`page ${className}`.trim()}>
            {children}
        </section>
    )    
}