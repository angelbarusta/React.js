import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./styles/Navbar.css";

import FotoUser from "../components/gravatar";

import logo from "../images/logo.svg";

export const Navbar = () => {
  return (
    <div className='Navbar'>
      <Link className='Navbar__brand' to='/'>
        <img className='Navbar__brand-logo' src={logo} alt='Logo' />
        <span className='font-weight-light'>Platzi</span>
        <span className='font-weight-bold'>Conf</span>
      </Link>

      <Link className='Navbar__brand' to='/'>
        <img className='Navbar__brand-user' src={FotoUser} alt='user' />
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, null)(Navbar);
