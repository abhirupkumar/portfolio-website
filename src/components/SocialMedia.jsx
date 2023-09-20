import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://github.com/abhirupkumar" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        {/* <div>
            <FaFacebookF />
        </div> */}
        <div>
            <a href="https://www.linkedin.com/in/abhirup-kumar-bhowmick-739833237" target="_blank" rel="noreferrer"><BsLinkedin /></a>
        </div>
    </div>
);

export default SocialMedia;