// components/HeroSection.tsx
import "../styles/page4.css";
import Image from 'next/image';
import emoji from '/public/Images/emoji.png';
import icon1 from '/public/Images/Icon1.png';
import icon2 from '/public/Images/Icon2.png';

const HeroSection = () => {
  return (
    <div className="emo-container">
        <div className="emo-image">
        <Image src={emoji} alt="3D Illustration" />
      </div>
      <div className="emo-content">
        <h4 className="emo-overline">OVERLINE</h4>
        <h1 className="emo-title">Habitant tristique aliquam in vel scelerisque</h1>
        <p className="emo-desc">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="emo-features">
          <div className="emo-feature">
            <Image src={icon1} alt="Icon" />
            <div>
              <h3>Sollicitudin sapien</h3>
              <p>Cursus fermentum</p>
            </div>
          </div>
          <div className="emo-feature">
            <Image src={icon2} alt="Icon" />
            <div>
              <h3>Pulvinar metus</h3>
              <p>Nunc sed</p>
            </div>
          </div>
        </div>
        <div className="emo-buttons">
          <button className="emo-started">Get started</button>
          <button className="emo-learn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
