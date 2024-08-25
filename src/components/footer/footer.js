import './../../assets/css/footer.css';
const Footer = () => {
    return (
        <div className="item">
            <div className ="icon">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-google"></i>
                <i className="bi bi-youtube"></i>
            </div>
            <div className="text">
                <div className='textItem'>
                    <p>Home</p>
                    <p>News</p>
                    <p>About</p>
                    <p>Contact Us</p>
                    <p>Our Team</p>
                </div>             
            </div>
        </div>     
    );
}
export default Footer;