import React from 'react';
import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import './Footer.css';
import {images} from "../../constants"

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay/>
    <Newsletter/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Bog'lanish</h1>
        <p className="p__opensans">Toshkent sh. Yunusobod, Amir Temur 109</p>
        <p className="p__opensans"> +998 71 238 64 15</p>
        <p className="p__opensans">info@tuit.uz</p>
      </div>

      <div className="app__footer-links_logo">
      <h1 className="app__footer-headtext">Nargiza Toshova</h1>
        <p className="p__opensans">&quot;Individual loyiha uchun&quot;</p>
        <p className="p__opensans">310-21 guruh talabasi</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/TUIT1955"><FiFacebook /></a>
          <a href="https://www.instagram.com/tuit.official?r=nametag"><FiInstagram /></a>
          <FiTwitter />
          
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Ish vaqti</h1>
        <p className="p__opensans">Dushanba-Shanba:</p>
        <p className="p__opensans">8:30 am - 6:00 pm</p>
        <p className="p__opensans">Yakshanba:</p>
        <p className="p__opensans">Dam olish kuni</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">TATU Dasturiy injiniring fakulteti 2024</p>
    </div>
  </div>
);

export default Footer;
