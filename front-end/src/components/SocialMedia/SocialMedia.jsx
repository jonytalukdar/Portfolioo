import React from 'react';

import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/jonytalukdar"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/joney-miah/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/jony.talukdar.75/"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
