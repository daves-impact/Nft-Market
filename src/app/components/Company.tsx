import Image from 'next/image';
import '../styles/company.css';
import myImage1 from '/public/Images/Ritter Sport.png';
import myImage2 from '/public/Images/Nike.png';
import myImage3 from '/public/Images/Adidas.png';
import myImage4 from '/public/Images/New Holland.png';

export default function Navbar() {
  return (
    <div className="floating-comp">
      <Image 
      src={myImage1} 
      alt=''
      className="comp"
      />

      <Image 
      src={myImage2} 
      alt=''
      className="comp"
      />

      <Image 
      src={myImage3} 
      alt=''
      className="comp"
      />

      <Image 
      src={myImage4} 
      alt=''
      className="comp"
      />
    </div>
  );
}
