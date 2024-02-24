import { Link } from 'react-router-dom';
import Image from '../images/1.png';
import '../scss/header.scss';

function Header () {
    return (
        <header className='header'>
            <div className='header_container'>
                <img className="header_image" src={Image} alt="logo compartamos" />
                <section className='header_menu'>
                <Link className="header_menu" to="/forms">
                    Regístrate{" "}
                </Link>
                <Link className="header_menu" to="/card">
                    Mi perfil {" "}
                </Link>
                <Link className="header_menu" to="/AboutUs">
                    Contáctanos {" "}
                </Link>
                </section>
            </div>
        </header>

    )
}

export default Header;