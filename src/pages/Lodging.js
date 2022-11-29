import { useNavigate, useParams } from "react-router-dom"
import Slideshow from "./../components/Slideshow"
import Collapse from "./../components/Collapse"
import Rating from "./../components/Rating"
import { useEffect, useState } from "react"
import useFetch from "./../utils/hooks/useFetch";



function Lodging() {
    const { lodgingId } = useParams()
    const navigate = useNavigate();
    const [lodging, setlodging] = useState(null)
    const { datas, isLoading } = useFetch("./../logements.json")

    useEffect(() => {
        const data = datas.filter(element => element.id === lodgingId)

        if (data.length < 1 && !isLoading) {
            navigate("*")
        } else {
            setlodging(data[0])
        }

    }, [isLoading]);


    return (
        <> {lodging && (<div className="lodging">
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
                <div className="lodging__collapses__collapse"><Collapse label="Equipements" description={lodging.equipments.map((element, index) => (
                    <p key={index}>{element}</p>
                ))} /></div>
            </div>
        </div>)}
        </>

    )
}


export default Lodging