import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-slate-900 text-white">
        <div>
          <div>
            <img className="w-20" src={logo} alt="" />
          </div>
          <p>
            Laptotech
            <br />
            Providing reusable tech since 2012
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover">Selling</Link>
          <Link className="link link-hover">Buying</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-slate-900 text-white">
        <div>
          <p>Copyright © 2022 - All right reserved by Laptotech</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
