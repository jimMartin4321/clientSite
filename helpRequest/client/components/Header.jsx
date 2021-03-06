import React from 'react';
import talkDeskLogo from '../../public/talk_desk_logo.png';

const Header = () => (
  <div className="header">
    <div className=" innerBorder">
      <img src={talkDeskLogo} height="40" width="310" />
    </div>
    <h2 className="callToAction">
      How can we <strong>Help</strong>?
    </h2>
  </div>
);

export default Header;