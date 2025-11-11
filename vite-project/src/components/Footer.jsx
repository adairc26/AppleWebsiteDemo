import { footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                <img src="/logo.svg" alt ="apple logo" />           
            </div>

            <hr />

            <div className="links">
                <p>© built by <a href="https://acyber.site">caja tech</a></p>

                <ul>
                    {footerLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}

export default Footer