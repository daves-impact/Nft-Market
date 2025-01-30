import '../styles/hero.css';
import SearchBar from './SearchBar';
import Floating from './FloatingNft'
import Company from './Company'
import Image from 'next/image';
import myImage1 from '/public/Images/Frame1.png';
import myImage2 from '/public/Images/Frame2.png';

export default function Navbar() {
  return (
    <div className="hero">
      <Floating />
      <p>NON FUNGIBLE TOKENS</p>
            <h2 className="intro"><span>A new NFT</span>
      <Image 
      src={myImage1} 
      alt=''
      className="frame-one"
      />
            </h2>
           <h2 className="highlight">
           <Image 
      src={myImage2} 
      alt=''
      className="frame-two"
      />
            <span>Experience</span>
           </h2>
            <p>Discover, collect, and sell</p>
            <SearchBar />
            <Company />
    </div>
  );
}
