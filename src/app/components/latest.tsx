import React from "react";
import Image from "next/image";
import  '../styles/latest.css';
import myImage from '/public/Images/item2.png';

const auctionItems = [
  {
    id: 1,
    // image: "/images/nft1.png",
    title: "Vulputate felis purus viverra morbi facilisi",
    price: "3.19 ETH",
    timeLeft: "24:1 min left",
    bids: 35,
    likes: 120,
  },
  {
    id: 2,
    // image: "/images/nft2.png",
    title: "Dui accumsan leo vestibulum ornare eu",
    price: "1.11 ETH",
    timeLeft: "22:59 min left",
    bids: 101,
    likes: 57,
  },
  {
    id: 3,
    // image: "/images/nft3.png",
    title: "Senectus adipiscing nascetur accumsan",
    price: "1.63 ETH",
    timeLeft: "37:01 min left",
    bids: 12,
    likes: 98,
  },
  {
    id: 4,
    // image: "/images/nft4.png",
    title: "Mattis at diam lorem nam sed sociis",
    price: "2.55 ETH",
    timeLeft: "12:15 min left",
    bids: 19,
    likes: 54,
  },
  {
    id: 5,
    // image: "/images/nft4.png",
    title: "Mattis at diam lorem nam sed sociis",
    price: "2.55 ETH",
    timeLeft: "12:15 min left",
    bids: 19,
    likes: 54,
  },
];

const Auctions = () => {
  return (
    <div className="auctionsContainer">
      <h2 className="latest-title">Latest live auctions</h2>
      <div className="auctionsList">
        {auctionItems.map((item) => (
          <div key={item.id} className="auctionCard">
            <Image src={myImage} alt={item.title} width={300} height={300} className="latest-image" />
            <div className="details">
            <h3 className="itemTitle">{item.title}</h3>
              <span className="price">{item.price}</span>
            </div>
            <p className="time">{item.timeLeft}</p>
            <div className="stats">
              <span>{item.bids} people are bidding</span>
              <span>❤️ {item.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Auctions;
