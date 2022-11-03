import "./header.scss";
import Logo from "../../assets/logo/Brainflix-logo.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";

function Header(props) {
  return (
    <header className="header">
        <div className="header__logo-container">
            <a href="/" className="header__logo">
                <img className="header__logo-image"
                    src={Logo}
                    alt="BrainFlix logo">
                </img>    
            </a>
        </div>
        
        <nav className="header__nav-container">
            <div className="header__nav-input-avatar">
                <input className="header__input-field" placeholder="Search"></input>
                <div className="header__avatar-container">
                    <img className="header__avatar"
                        src={Image}
                        alt="Side of a man's face">
                    </img>
                </div>
            </div>
            
            <button className="header__button" type="text">UPLOAD</button>
        </nav>
    </header>
  );
}

export default Header;