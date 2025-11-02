import '../styles/index.css'
import logoFooter from '../assets/logoFooter.svg'


export function Footer() {

    return (
        <div className="footer">
            <img src={logoFooter} alt="logo Kasa" />
            <div className='footer_containt'><p className='footer_sentence'>© 2020 Kasa. All rights reserved</p></div>
        </div>
    )
}