import Image from 'next/image';
import '../styles/slider.css';
import myImage1 from '/public/Images/scrollingIcons/04.png';
import myImage2 from '/public/Images/scrollingIcons/05.png';
import myImage3 from '/public/Images/scrollingIcons/06.png';
import myImage4 from '/public/Images/scrollingIcons/07.png';
import myImage5 from '/public/Images/scrollingIcons/08.png';
import myImage6 from '/public/Images/scrollingIcons/09.png';
import myImage7 from '/public/Images/scrollingIcons/10.png';
import myImage8 from '/public/Images/scrollingIcons/11.png';
import myImage9 from '/public/Images/scrollingIcons/12.png';
import myImage10 from '/public/Images/scrollingIcons/13.png';
import myImage11 from '/public/Images/scrollingIcons/14.png';
import myImage12 from '/public/Images/scrollingIcons/15.png';
import myImage13 from '/public/Images/scrollingIcons/16.png';
import myImage14 from '/public/Images/scrollingIcons/17.png';

export default function FloatingNFT() {
  return (
    <div className="auto_slider_container">
    <ul className="auto_slider">
        <Image src={myImage1} alt='' className="nft-scroll"/>
        <Image src={myImage2} alt='' className="nft-scroll"/>
        <Image src={myImage3} alt='' className="nft-scroll"/>
        <Image src={myImage4} alt='' className="nft-scroll"/>
        <Image src={myImage5} alt='' className="nft-scroll"/>
        <Image src={myImage6} alt='' className="nft-scroll"/>
        <Image src={myImage7} alt='' className="nft-scroll"/>
        <Image src={myImage8} alt='' className="nft-scroll"/>
        <Image src={myImage9} alt='' className="nft-scroll"/>
        <Image src={myImage10} alt='' className="nft-scroll"/>
        <Image src={myImage11} alt='' className="nft-scroll"/>
        <Image src={myImage12} alt='' className="nft-scroll"/>
        <Image src={myImage13} alt='' className="nft-scroll"/>
        <Image src={myImage14} alt='' className="nft-scroll"/>
        
    </ul>
    <ul className="auto_slider">
    <Image src={myImage1} alt='' className="nft-scroll"/>
        <Image src={myImage2} alt='' className="nft-scroll"/>
        <Image src={myImage3} alt='' className="nft-scroll"/>
        <Image src={myImage4} alt='' className="nft-scroll"/>
        <Image src={myImage5} alt='' className="nft-scroll"/>
        <Image src={myImage6} alt='' className="nft-scroll"/>
        <Image src={myImage7} alt='' className="nft-scroll"/>
        <Image src={myImage8} alt='' className="nft-scroll"/>
        <Image src={myImage9} alt='' className="nft-scroll"/>
        <Image src={myImage10} alt='' className="nft-scroll"/>
        <Image src={myImage11} alt='' className="nft-scroll"/>
        <Image src={myImage12} alt='' className="nft-scroll"/>
        <Image src={myImage13} alt='' className="nft-scroll"/>
        <Image src={myImage14} alt='' className="nft-scroll"/>
    </ul>
    
</div>
  );
}
