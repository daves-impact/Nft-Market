import "../styles/footer.css";
import Image from 'next/image';
import myImage from '/public/Images/Sygnet.png';
import mySocial1 from '/public/Images/social/Facebook.svg';
import mySocial2 from '/public/Images/social/Github.svg';
import mySocial3 from '/public/Images/social/Instagram.svg';
import mySocial4 from '/public/Images/social/LinkedIn.svg';
import mySocial5 from '/public/Images/social/Twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="column ichi">
        <Image 
      src={myImage} 
      alt=''
      className="logo-im"
      />
          <h2 className="logo">NFT Market</h2>
          <div className="links">
            <a href="#">Support</a>
            <a href="#">Term of service</a>
            <a href="#">License</a>
          </div>
        </div>

        <div className="column nii">
          <ul className="menu">
            <li><a href="#">Auctions</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Community</a></li>
          </ul>
          <button className="accountBtn">My account</button>
          <div className="socialIcons">
            <a href="#"><Image src={mySocial1} alt="Home" width={24} height={24} /></a>
            <a href="#"><Image src={mySocial2} alt="Home" width={24} height={24} /></a>
            <a href="#"><Image src={mySocial3} alt="Home" width={24} height={24} /></a>
            <a href="#"><Image src={mySocial4} alt="Home" width={24} height={24} /></a>
            <a href="#"><Image src={mySocial5} alt="Home" width={24} height={24} /></a>
          </div>
        </div>

        <div className="column san">
          <p>
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet
            velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
          </p>
          <div className="newsletter">
            <input type="text" placeholder="Newsletter" />
            <a href="#">Sign In</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
