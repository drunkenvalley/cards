export default function Card({ children, className = '', number }) {
    return (
        <div className="card--gutter">
            {number && <div className="card--number">{number}</div>}
            <article className={`card card--cover ${className}`.trim()}>
                {children}
            </article>
        </div>
    )    
}