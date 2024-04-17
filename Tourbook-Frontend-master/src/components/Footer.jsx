// Footer.js
import {SocialIcon} from 'react-social-icons'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-[200px]">
        <div className="mb-4 md:mb-0 mx-4">
          <h1 className="text-xl font-semibold">© 2023 TripMate</h1>
          <p className="mt-2">All rights reserved</p>
        </div>
        <span className='flex flex-row justify-center gap-4'>
        <SocialIcon url="https://www.instagram.com/rushi___555?igsh=eWUzZ3lwYXF0ajh6" />
        <SocialIcon url="https://www.linkedin.com/in/rushikesh-pendhare-b10471229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
        <SocialIcon url="https://twitter.com/Rushi__555?t=XXdfUDGUJsN5BwfQN4iHcA&s=08" />
        <SocialIcon url="" />


        </span>
        <div className="flex space-x-6 mx-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/" className="hover:text-gray-400">About</a>
          <a href="/" className="hover:text-gray-400">Services</a>
          <a href="/" className="hover:text-gray-400">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
