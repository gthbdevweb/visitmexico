import React from 'react';
import Rss from '../components/Rss';
import StuffToDownload  from '../components/StuffToDownload';
import './style.css';

const StuffToDownloadContent = () => {
  return (
    <div className="main-content">
      <Rss />
      <StuffToDownload />
    </div>
  );
};

export default StuffToDownloadContent;
