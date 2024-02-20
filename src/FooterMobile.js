import logoWhite from "./images/logo-white.svg";
function FooterMobile() {
    return (
        <div className="footer-container-mobile">
            <div className="footer-up-mobile">
                <div className="footer-up-left">
                    <img src={logoWhite} />
                    <div className="signup-container">
                        <input className="signup-input" placeholder="Email" />
                        <div className="signup">Sign Up</div>
                    </div>
                </div>
            </div>
            <div className="footer-down-mobile">
                <div className="footer-down-mobile-text">
                    contact@nttdata.com
                </div>
                <div className="footer-down-mobile-text">+3 9876 765 444</div>
            </div>
        </div>
    );
}

export default FooterMobile;
