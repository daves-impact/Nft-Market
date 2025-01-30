import Link from 'next/link';
import '../styles/navbar.css';
import Image from 'next/image';
import myImage from '/public/Images/Sygnet.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Image 
      src={myImage} 
      alt=''
      className="logo"
      />
      <div className="nav-links">
        <Link href="#">Auctions</Link>
        <Link href="#">Roadmap</Link>
        <Link href="#">Discover</Link>
        <Link href="#">Community</Link>
      </div>
      <div className="nav-buttons">
        <button className="contact-btn">Contact</button>
        <button className="account-btn">My Account</button>
      </div>
    </nav>
  );
}
