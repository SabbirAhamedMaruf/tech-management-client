import {FaFacebookF,FaYoutube} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import{BiLogoTwitter} from 'react-icons/bi'
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Footer = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div>
      <footer style={theme ? {backgroundColor : "#161828"} : {backgroundColor : "#000000"}} className="p-2 text-white text-center shadow-lg rounded-t-3xl mt-24">
        <div className="w-[85%] py-10 m-auto">
        <div className="flex justify-between mt-8">
          <nav className="flex flex-col space-y-5">
            <header className="text-green-400 uppercase font-bold mb-4">Services</header>
            <a className="hover:text-blue-400">Branding</a>
            <a className="hover:text-blue-400">Design</a>
            <a className="hover:text-blue-400">Marketing</a>
            <a className="hover:text-blue-400">Advertisement</a>
          </nav>
          <nav className="flex flex-col space-y-5">
            <header className="text-green-400 uppercase font-bold mb-4">Company</header>
            <a className="hover:text-blue-400">About us</a>
            <a className="hover:text-blue-400">Contact</a>
            <a className="hover:text-blue-400">Jobs</a>
            <a className="hover:text-blue-400">Press kit</a>
          </nav>
          <nav className="flex flex-col space-y-5">
            <header className="text-green-400 uppercase font-bold mb-4">Legal</header>
            <a className="hover:text-blue-400">Terms of use</a>
            <a className="hover:text-blue-400">Privacy policy</a>
            <a className="hover:text-blue-400">Cookie policy</a>
          </nav>
        </div>
        <div className="mt-8">
        <div className="flex flex-col items-center">
          <img className="w-8 lg:w-16 pb-2" src="https://i.ibb.co/sybN30K/Footer-Logo.png" />
          <h1 className="text-xl">{"Tech Heaven"}</h1>
        </div>
        <div className='space-x-6 mt-4'>
              <button className='text-2xl p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full'><FaFacebookF/></button>
              <button className='text-2xl p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full'><FaYoutube/></button>
              <button className='text-2xl p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full'><FiInstagram/></button>
              <button className='text-2xl p-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full'><BiLogoTwitter/></button>
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
