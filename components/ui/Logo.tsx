"use client";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="logo-container">
        <div className="relative w-32 h-32">
          <Image
            src="/logo.png"
            alt="Skillsprout Logo"
            fill
            priority
            className="object-contain p-2"
          />
        </div>
      </div>
      <h1 className="text-5xl font-bold text-center gradient-text">
        Skillsprout
      </h1>
      <p className="text-gray-300 text-lg text-center max-w-md">
        Growing Skills for the Future of Web3
      </p>
    </div>
  );
} 