import React from 'react';
import './App.css';
import { FaPhone, FaEnvelope, FaBuilding, FaGlobe, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdSend } from 'react-icons/io';

const BusinessCard = () => {
  return (
    <div className="business-card-container">
      <div className="business-card">
        <div className="header">
          <img
            src="https://via.placeholder.com/100"
            alt="Logo"
            className="profile-image"
          />
          <div className="name-title">
            <h2 className="name">Eslam Zahran</h2>
            <p className="title">Fiber Optics Engineering</p>
          </div>
          <div className="footer">
          <button className="button">
            <FaPhoneAlt className="icon" />

            Call
          </button>
          <button className="button">
            <IoMdSend  className="icon" />
            Email
          </button>
        </div>
        </div>
        <div className="content">
          <p className="info">
            <FaPhoneAlt className="icon" />
            <div>
            <h4>
            +20 102 583 5635
                        </h4>
            <span>
              Mobile
            </span>
            </div>
          </p>
          <p className="info">
            <FaEnvelope className="icon" />
            <div>
            <a href="mailto:amgad.habib@rdm.com" className="email">
            EslamZahran@gmail.com
            </a>
            <span>
              E-mail
            </span>
            </div>
          </p>
          <p className="info">
            <FaBuilding className="icon" />
           <div>
            <h4>
            SQAD
            </h4>
            <span>Company</span>
           </div>
          </p>
          <p className="info">
            <CiLocationOn  className="icon" />
            <div>
            <h4>Egypt</h4>
            <span>
              Location
            </span>
            </div>
          </p>
          <p className="info">
            <FaGlobe className="icon" />
            <div>
            <a href="https://rdm.com" target="_blank" rel="noopener noreferrer" className="website">
              rdm.com
            </a>
            <span>
              Website
            </span>
            </div>

          </p>
        </div>
        
      </div>
    </div>
  );
};

export default BusinessCard;