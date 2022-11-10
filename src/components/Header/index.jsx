import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';


function Header() {

    //state (état,données)
    const [className, setClassName] = useState({
        home: "header__link linkActive",
        aboutus: "header__link"
    })

    const pathname = useLocation().pathname

    //comportements
    useEffect(() => {
        if (pathname === "/") {
            setClassName({
                home: "header__link linkActive",
                aboutus: "header__link"
            })
        } else if (pathname === "/aboutus") {
            setClassName({
                home: "header__link",
                aboutus: "header__link linkActive"
            })
        } else {
            setClassName({
                home: "header__link",
                aboutus: "header__link"
            })
        }
    }, [pathname]
    )

    //affichage (render)
    return (
        <header>
            <img src={logo} alt="logo" className='header__logo' />
            <nav>
                <Link to="/" className={className.home}>Acceuil</Link>
                <Link to="/aboutus" className={className.aboutus}>A propos</Link>
            </nav>
        </header>
    )
}


export default Header