import { FaStar } from 'react-icons/fa'


function Rating({ rate }) {
    const rateMax = 5
    const numberOfColoredStars = rate
    const numberOfGreyStars = rateMax - numberOfColoredStars
    let starsArray = []
    for (let i = 0; i < numberOfColoredStars; i++) {
        starsArray.push(<div className="rating__coloredStar"><FaStar /></div>)
    }
    for (let i = 0; i < numberOfGreyStars; i++) {
        starsArray.push(<div className="rating__greyStar"><FaStar /></div>)
    }

    return (
        <div className="rating">
            {starsArray}
        </div>
    )
}


export default Rating