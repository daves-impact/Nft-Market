import Image from 'next/image';
import '../styles/floatingnft.css';
import myImage1 from '/public/Images/Square 01.png';
import myImage2 from '/public/Images/Square 02.png';
import myImage3 from '/public/Images/Square 03.png';
import myImage4 from '/public/Images/Square 04.png';
import myImage5 from '/public/Images/Square 05.png';
import myImage6 from '/public/Images/Square 06.png';

export default function FloatingNFT() {
  return (
    <div className="floating-nfts">
      <Image 
      src={myImage1} 
      alt=''
      className="nft one"
      />

      <Image 
      src={myImage2} 
      alt=''
      className="nft two"
      />

      <Image 
      src={myImage3} 
      alt=''
      className="nft three"
      />

      <Image 
      src={myImage4} 
      alt=''
      className="nft four"
      />

    <Image 
      src={myImage5} 
      alt=''
      className="nft five"
      />

      <Image 
      src={myImage6} 
      alt=''
      className="nft six"
      />
    </div>
  );
}
