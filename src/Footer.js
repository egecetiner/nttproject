import instagram from "./images/instagram.svg";
import facebook from "./images/facebook.svg";
import linkedin from "./images/linkedin.svg";
import logoWhite from "./images/logo-white.svg";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-up">
                <div className="footer-up-left">
                    <img src={logoWhite} />
                    <div className="footer-up-left-text">
                        Lorem ipsum dolor sit amet consectetur. Auctor tempor
                        pretium aliquam neque.
                    </div>
                    <div className="signup-container">
                        <input className="signup-input" placeholder="Email" />
                        <div className="signup">Sign Up</div>
                    </div>
                </div>
                {window.screen.width < 1440 ? (
                    <div className="tablet-title-container">
                        <div className="tablet-title">Title</div>
                        <div className="tablet-title">Title</div>
                        <div className="tablet-title">Title</div>
                        <div className="tablet-title">Title</div>
                        <div className="tablet-title">Title</div>
                    </div>
                ) : (
                    <div className="footer-up-right">
                        <div>
                            <div className="footer-title">Title</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                        </div>
                        <div>
                            <div className="footer-title">Title</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                        </div>
                        <div>
                            <div className="footer-title">Title</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                            <div className="footer-subtitle">Subtitle</div>
                        </div>
                    </div>
                )}
            </div>
            <div className="footer-down">
                <div className="footer-down-text">contact@nttdata.com</div>
                <div className="footer-down-text">+3 9876 765 444</div>
                <div className="footer-socials">
                    <img className="instagram" src={instagram} />
                    <img className="facebook" src={facebook} />
                    <img className="linkedin" src={linkedin} />
                </div>
            </div>
        </div>
    );
}

export default Footer;
