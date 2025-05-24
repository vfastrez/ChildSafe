// Footer.jsx
import React from "react";
import "../styles/Footer.scss";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section footer__socials">
        <h4>Suivez-nous</h4>
        <ul>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillFacebook className="footer__socials" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__socials"
            >
              <AiFillInstagram className="footer__socials" />
            </a>
            <a
              href="https://www.tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__socials"
            >
              <AiOutlineTikTok className="footer__socials" />
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__section footer__contact">
        <h4>Contact</h4>
        <a href="mailto:childsafe.animationenfant@gmail.com">
          Email : childsafe.animationenfant@gmail.com
        </a>
        <p>Tél : +33 6 51 83 51 08</p>
      </div>
      <div className="footer__section footer__legal">
        <h4>Légal</h4>
        <ul>
          <li>
            <a href="/cgv">Conditions Générales</a>
          </li>
          <li>
            <a href="/mentions-legales">Mentions Légales</a>
          </li>
        </ul>
      </div>
      <div className="footer__section footer__certif">
        <script src="https://cdn1.mariages.net/_js/wp-rated.js?v=4"></script>
        <div id="wp-rated">
          <a
            target="_blank"
            rel="nofollow"
            href="https://www.mariages.net/animation-mariage/childsafe--e352695"
            title="Recommandé sur www.mariages.net"
          >
            <img
              alt="Recommandé sur Mariages.net"
              id="wp-rated-img"
              src="https://cdn1.mariages.net/assets/img/badges/rated/badge-rated-5.png"
            />
          </a>
        </div>
        <script>wpShowRatedv2('352695');</script>
      </div>
    </footer>
  );
};

export default Footer;
