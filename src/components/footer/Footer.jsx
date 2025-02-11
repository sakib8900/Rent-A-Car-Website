import React from "react";
import logo2 from "../../assets/logo/logo.jpeg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-red-500 text-white">
      <div>
        <img src={logo2} alt="" className="w-20 h-20 rounded-full" />
        <p className="font-bold text-lg">
          Rent A Car
          <br />
          Reliable & Affordable Vehicle Rentals
        </p>
      </div>
      <div>
        <span className="footer-title text-yellow-200">Services</span>
        <Link to="availableCars">
          <a className="link link-hover text-gray-100">Car Rentals</a>
        </Link>
        <Link to="myBookings">
        <a className="link link-hover text-gray-100">Manage Booking</a>
        </Link>
        <Link to="availableCars">
        <a className="link link-hover text-gray-100">Luxury Cars</a>
        </Link>
      </div>
      <div>
        <span className="footer-title text-yellow-200">Company</span>
        <Link to="aboutUs">
        <a className="link link-hover text-gray-100">About Us</a>
        </Link>
        <Link to="Contact">
        <a className="link link-hover text-gray-100">Contact</a>
        </Link>
        <Link to="Privacy">
        <a className="link link-hover text-gray-100">Privacy Policy</a>
        </Link>
      </div>
      <div>
        <span className="footer-title text-yellow-200">Follow Us</span>
        <a href="https://www.facebook.com/nip.sakib.1" className="link link-hover text-gray-100">Facebook</a>
        <a href="https://www.linkedin.com/in/nazmul-islam-saki0b/" className="link link-hover text-gray-100">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
