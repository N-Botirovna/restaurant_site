import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightShort } from 'react-icons/bs';


import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState('');
  const [warn, setWarn]=useState(false)

  const handleSubsCription= () => {
    if (email.length < 3 || !email.includes('@')) {
      setWarn(true);
      return;
    }
    setWarn(false)
    setIsSubscribed(true);
    setIsClicked(false);
    
  };
  const handleClick= () => {
    setIsClicked(true);

  }
  return(
    <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
    <input
          type="email"
          placeholder="Enter your email address"
          min={3}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={warn? "warn" : ''}
        />
      <button type="button" className="custom__button" onClick={handleSubsCription}>Subscribe</button>
    </div>

    {isSubscribed && !isClicked && (
        <div className="newsletter-modal">
          <div className="newsletter-modal-content">
            <h2 className="newsletter-modal-heading">Thank you for subscribing!</h2>
            <p className="newsletter-modal-text">You will now receive our latest updates.</p>
            <Link to={"/"} className={"go-home"} onClick={handleClick}
            >Go Home <BsArrowRightShort/></Link>
            
          </div>
        </div>
      )}
  </div>
  )
};

export default Newsletter;
