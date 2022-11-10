function Card({ title, picture }) {
    //affichage (render)
    return (
        <div className="card">
            <img src={picture} alt={title} className="card__image" />
            <div className="card__title">{title}</div>
        </div>
    )
}

export default Card