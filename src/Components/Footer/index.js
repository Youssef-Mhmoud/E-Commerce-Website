import {
  faFacebook,
  faFacebookSquare,
  faLinkedin,
  faTwitter,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex-footer">
        <div className="logo-footer">
          <h2>SHOPPING</h2>
          <div className="media-foot">
            <FontAwesomeIcon icon={faFacebookSquare} color="" />
            <FontAwesomeIcon icon={faTwitterSquare} color="" />
            <FontAwesomeIcon icon={faLinkedin} color="" />
          </div>
          <p className="details-foot">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit,
            fuga itaque, soluta illo eligendi doloremque nihil eum iusto modi
            aliquid ad dolor deleniti nobis. At, ullam ratione. Molestiae, aut
            autem. cupiditate facilis totam.
          </p>
        </div>
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Reviews</li>
            <li>Values</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="company">
          <h3>Let US HELP YOU</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>How To Shop?</li>
            <li>Report a Product</li>
            <li>Dispute Resolution Policy</li>
          </ul>
        </div>
      </div>
      <p className="copy">CopyRights© 2022, ShoPPing</p>
    </footer>
  );
};

export default Footer;
