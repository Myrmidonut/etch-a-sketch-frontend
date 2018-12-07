import React, { Component } from 'react';

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="gallery">
        <a href="#" alt="Gallery" id="galleryButton">Gallery</a>
      </div>
      <div id="interface">
        <a href="#" alt="Save">Save</a>
        <a href="#" alt="Delete">Delete</a>
        <a href="#" alt="Reset">Reset</a>
        <a href="#" alt="Settings">Settings</a>
      </div>
      <div id="account">
        <a href="#" alt="Login">Login</a>
        <a href="#" alt="Register">Register</a>
        <a href="#" alt="Logout">Logout</a>
        <a href="#" alt="Account">Account</a>
      </div>
    </div>
  )
}

export default Navbar;