import { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"

function Slideshow({ photosArray }) {
    console.log(photosArray)
    const numberOfphotos = photosArray.length
    const firstPhoto = photosArray[0]
    console.log(firstPhoto)
    const lastPhoto = photosArray[numberOfphotos - 1]
    console.log(lastPhoto)
    const [actualPhoto, setActualPhoto] = useState(firstPhoto)
    console.log(actualPhoto)

    const previousPhoto = function (actualPhoto) {
        if (actualPhoto === firstPhoto) {
            console.log(actualPhoto)
            setActualPhoto(lastPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex - 1])
        }
    }
    const nextPhoto = function (actualPhoto) {
        if (actualPhoto === lastPhoto) {
            setActualPhoto(firstPhoto)
        } else {
            const actualPhotoIndex = photosArray.indexOf(actualPhoto)
            setActualPhoto(photosArray[actualPhotoIndex + 1])
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshow__image">
                <img src={actualPhoto} alt="lodging" />
            </div>
            {numberOfphotos !== 1 &&
                <div>
                    <span className="slideshow__arrowsLeft arrow" onClick={() => previousPhoto(actualPhoto)}><FaAngleLeft /></span>
                    <span className="slideshow__arrowsRight arrow" onClick={() => nextPhoto(actualPhoto)}><FaAngleRight /></span>
                    <div className="slideshow__bulletpoint">
                        {photosArray.indexOf(actualPhoto) + 1}/{numberOfphotos}
                    </div>
                </div>
            }
        </div>
    )
}


export default Slideshow