import '../styles/index.css'
import logoFooter from '../assets/logoFooter.svg'


export function Footer() {

    return (
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" />
            <p className='footer_sentence'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}