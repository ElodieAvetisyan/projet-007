import Banner from "./../components/Banner";
import Card from "./../components/Card";
import useFetch from "./../utils/hooks/useFetch";
import { Link } from "react-router-dom";
import banner from "./../assets/banner.png"

function Home() {
    const { datas, isLoading } = useFetch("./logements.json")

    console.log(datas)
    return (
        <div className="home">
            <Banner
                text="Chez vous, partout et ailleurs"
                picture={banner}
            />
            {isLoading ? (
                <div className="loader"></div>
            ) : (
                <div className="home__cards">
                    {datas.map((lodging) => (
                        <Link to={`/Hebergement/${lodging.id}`} key={lodging.id}>
                            <Card
                                title={lodging.title}
                                picture={lodging.pictures[0]}
                            />
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home