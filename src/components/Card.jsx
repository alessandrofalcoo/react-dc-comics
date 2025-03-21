export default function Card({ image, title }) {
    return (
        <div className="cards-container">
            <div className="card">
                <img src={image} />
                <p>{title}</p>
            </div>
        </div>
    )
}