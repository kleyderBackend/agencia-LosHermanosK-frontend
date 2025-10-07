import { dateFooter } from '../../utils/FooterDate'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
            <p>Derechos reservados Hermanos K | {dateFooter()}  </p>
        </footer>
    )
}