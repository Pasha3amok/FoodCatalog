import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="red darken-1">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">
                    FoodStore
                </Link>

                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <Link to="/about">About me</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
