import "./App.css";
import image from "./assets/img.JPG";
import { FaEnvelope, FaBuilding, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

const BusinessCard = () => {
  return (
    <div className="business-card-container">
      <div className="business-card">
        <div className="header">
          <img
            src={image}
            alt="Logo"
            width={"100px"}
            className="profile-image"
          />
          <div className="name-title">
            <h2 className="name">Eslam Zahran</h2>
            <p className="title">Solution architect engineer</p>
          </div>
          <div className="footer">
            <a href="tel:+201025835635" className="button">
              <FaPhoneAlt className="icon" />
              Call
            </a>
            <a href="mailto:Islam.osama@squaddns-eg.com" className="button">
              <IoMdSend className="icon" />
              Email
            </a>
          </div>
        </div>
        <div className="content">
          <p className="info">
            <FaPhoneAlt className="icon" />
            <div>
              <a
                href="tel:+201025835635"
                style={{ color: "black", textDecoration: "none" }}
              >
                +20 102 583 5635
              </a>
              <span>Mobile</span>
            </div>
          </p>
          <p className="info">
            <FaEnvelope className="icon" />
            <div>
              <a href="mailto:Islam.osama@squaddns-eg.com" className="email">
                Islam.osama@squaddns-eg.com
              </a>
              <span>E-mail</span>
            </div>
          </p>
          <p className="info">
            <FaBuilding className="icon" />
            <div>
              <h4>SQUAD DNS</h4>
              <span>Company</span>
            </div>
          </p>
          <p className="info">
            <CiLocationOn className="icon" />
            <div>
              <h4>Egypt</h4>
              <span>Location</span>
            </div>
          </p>
          <p className="info">
            <FaGlobe className="icon" />
            <div>
              <a
                href="http://squaddns-eg.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="website"
              >
                squaddns-eg.com
              </a>
              <span>Website</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
