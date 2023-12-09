import { FaSearch } from 'react-icons/fa';
function Navbar(){
    return(
        <header>
            <nav>
                <div className="logo">
                <h1>Desihub</h1>
                </div>
                <div className="menu">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#toprated">Top-Rated</a></li>
                    <li><a href="#popular">Popular</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#search"><FaSearch /></a></li>
                </ul>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;