import React from 'react';
import '../styles/page3.css';
import Image from 'next/image';
import nft1 from '/public/Images/nft1.png';
import nft2 from '/public/Images/nft2.png';
import nft3 from '/public/Images/nft3.png';
import nft4 from '/public/Images/nft4.png';
import nft5 from '/public/Images/nft5.png';
import handImage from '/public/Images/hand.png';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Hottest Sale Offers */}
      <div className="section hottest-sales">
        <h2>Check out the hottest Sale offers</h2>
        <div className="nft-card">
          <Image src={nft1} alt="NFT 1" />
          <Image src={nft1} alt="NFT 1" />
        </div>
        <button className="show-more">Show me more</button>
      </div>

      {/* Center Section */}
      <div className="section center">
        <Image src={handImage} alt="Hand Art" className="hand-image" />
        <h2>Get started creating & selling your NFTs</h2>
        <p>Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat. Mit est sit.</p>
        <button className="get-started">Get started</button>
      </div>

      {/* Top NFT at a lower price */}
      <div className="section lower-price">
        <h2>Top NFT at a lower price</h2>
        <div className="nft-list">
          {[nft2, nft3, nft4, nft5].map((nft, index) => (
            <div key={index} className="nft-item">
              <Image src={nft} alt={`NFT ${index + 2}`} className="nft-image" />
            </div>
          ))}
        </div>
        <button className="show-more">Show me more</button>
      </div>
    </div>
  );
};

export default Dashboard;
