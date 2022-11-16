import { useParams } from "react-router-dom"
import Slideshow from "./../components/Slideshow"
import Collapse from "./../components/Collapse"
import Rating from "./../components/Rating"
const lodgingDatas = require("./../logements.json")

function getLodgingWithId(lodgingDatas, lodgingId) {
    for (let lodging of lodgingDatas) {
        if (lodging.id === lodgingId) {
            console.log(lodging.id, lodgingId, lodging)
            return lodging
        }
    }
}

function getHTMLLinesWithArray(array) {
    const newArray = []
    for (let element of array) {
        newArray.push(<p>{element}</p>)
    }
    return newArray
}

function Lodging() {
    const { lodgingId } = useParams()
    const lodging = getLodgingWithId(lodgingDatas, lodgingId)
    const lodgingEquipment = getHTMLLinesWithArray(lodging.equipments)

    return (
        <div className="lodging">
            <Slideshow photosArray={lodging.pictures} />
            <div className="lodging__informations">
                <div className="lodging__informations__lodging">
                    <div className="lodging__informations__lodging__title">{lodging.title}</div>
                    <div className="lodging__informations__lodging__location">{lodging.location}</div>
                    <ul className="lodging__informations__lodging__tags">
                        {lodging.tags.map((tag, index) => (
                            <li key={index} className="lodging__informations__lodging__tags__tag">{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="lodging__informations__hostAndRate">
                    <div className="lodging__informations__hostAndRate__host">
                        <div className="lodging__informations__hostAndRate__host__name">{lodging.host.name}</div>
                        <div className="lodging__informations__hostAndRate__host__picture">
                            <img src={lodging.host.picture} alt={lodging.host.name} />
                        </div>
                    </div>
                    <Rating rate={parseInt(lodging.rating)} />
                </div>
            </div>
            <div className="lodging__collapses">
                <div className="lodging__collapses__collapse"><Collapse label="Description" description={lodging.description} /></div>
                <div className="lodging__collapses__collapse"><Collapse label="Equipements" description={lodgingEquipment} /></div>
            </div>
        </div>
    )
}


export default Lodging