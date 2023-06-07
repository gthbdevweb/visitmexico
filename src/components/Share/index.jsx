import React from 'react';
import {
  FacebookShareButton,
  PinterestShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import './style.css';

const Share = ({
  urlFaceboock,
  urlPinterest,
  urlTwitter,
  urlWhatsapp
}) => {
  const urlFb = urlFaceboock ? urlFaceboock : 'https://visitmexico.com/';
  const urlPt = urlPinterest ? urlPinterest : 'https://visitmexico.com/';
  const urlTw = urlTwitter ? urlTwitter : 'https://visitmexico.com/';
  const urlWa = urlWhatsapp ? urlWhatsapp : 'https://visitmexico.com/';

  return (
    <div className="video-home-share">
      <FacebookShareButton url={urlFb} className="video-home-share-btn">
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <PinterestShareButton url={urlPt} className="video-home-share-btn">
        <PinterestIcon size={32} round={true} />
      </PinterestShareButton>
      <TwitterShareButton url={urlTw} className="video-home-share-btn">
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <WhatsappShareButton url={urlTw} className="video-home-share-btn">
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  )
};

export default Share;
