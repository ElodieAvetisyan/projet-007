function Banner({ text = "", picture }) {
    //affichage (render)
    return (
        <div className='banner'>
            <img src={picture} alt="banner" className="banner__image" />
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default Banner