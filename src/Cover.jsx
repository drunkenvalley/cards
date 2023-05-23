export default function Cover({ title, children, className = '' }) {
    return (
        <div className="card--gutter card--cover__gutter">
            <article className={`card card--cover ${className}`.trim()}>
                <h2>
                    {title}
                </h2>
                <hr />
                <p>
                    {children}
                </p>
            </article>
        </div>
    )    
}