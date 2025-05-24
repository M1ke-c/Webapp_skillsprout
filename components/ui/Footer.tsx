"use client";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-gray-400">
      <div className="container mx-auto flex justify-center items-center space-x-8">
        {/* Twitter/X Icon */}
        <a 
          href="#" // Aquí pondrás tu enlace de Twitter cuando lo tengas
          target="_blank" 
          rel="noreferrer" 
          className="hover:opacity-80 transition-opacity duration-300 flex flex-col items-center gap-2 group"
        >
          <div className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
            <FaTwitter size="100%" />
          </div>
          <span className="text-sm group-hover:text-white transition-colors">Twitter</span>
        </a>

        {/* Telegram Icon */}
        <a 
          href="#" // Aquí pondrás tu enlace de Telegram cuando lo tengas
          target="_blank" 
          rel="noreferrer" 
          className="hover:opacity-80 transition-opacity duration-300 flex flex-col items-center gap-2 group"
        >
          <div className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
            <FaTelegram size="100%" />
          </div>
          <span className="text-sm group-hover:text-white transition-colors">Telegram</span>
        </a>
      </div>
    </footer>
  );
}
