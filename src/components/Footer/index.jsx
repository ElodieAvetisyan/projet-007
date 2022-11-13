import whiteLogo from '../../assets/whiteLogo.png'


function Footer() {
    return (
        <footer>
            <img src={whiteLogo} alt="logo" />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer