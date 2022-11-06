import "./header.scss";
import Logo from "../../assets/logo/BrainFlix-logo.svg";
import Image from "../../assets/images/Mohan-muruge.jpg";
import UploadButton from "../../assets/icons/upload.svg";

export default function Header() {
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
              <div className="header__nav-search-field-avatar">
                  <input className="header__search-field" placeholder="Search"></input>
                <div className="header__avatar-container">
                    <img className="header__avatar"
                        src={Image}
                        alt="Left side of a man's face">
                    </img>
                </div>
            </div>
            
              <button className="header__button" type="text">
                  <img className="header__button-icon" src={UploadButton}></img>
                  Upload
              </button>
               <div className="header__avatar-container-second">
                    <img className="header__avatar-second"
                        src={Image}
                        alt="Left side of a man's face">
                    </img>
                </div>
        </nav>
    </header>
  );
}