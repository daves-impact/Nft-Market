'use client';

import Image from 'next/image';
import Link from 'next/link';
import '../styles/page2.css';
import myImage1 from '/public/Images/PaintPie.png';

export default function HeroSection() {
  return (
    <section className="pie-container">
      <div className="pie-content">
        <p className="pie-overline">OVERLINE</p>
        <h1 className="pie-title">Sapien ipsum scelerisque convallis fusce</h1>
        <p className="pie-text">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        <div className="pie-buttons">
          <Link href="#"><button className="pie-started">Get started</button></Link>
          <Link href="#"><button className="pie-learn">Learn more</button></Link>
        </div>
      </div>
      <div className="pie-image">
        <Image src={myImage1} alt="Hero Illustration" width={400} height={400} />
      </div>
    </section>
  );
}
