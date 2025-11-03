"use client";
import React, { useState } from "react";
import LoginForm from "../login/LoginForm";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Topbar/Header */}
      <header className="flex items-center justify-between px-12 py-6 bg-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="10" cy="10" r="4" fill="#FF6A13" />
              <rect x="18" y="6" width="16" height="4" rx="2" fill="#2C276F" />
              <rect x="6" y="18" width="28" height="4" rx="2" fill="#2C276F" />
            </svg>
          </div>
          <span className="text-3xl font-semibold text-[#2C276F]">Live<span className="text-[#FF6A13]">150</span></span>
        </div>
        <div className="flex items-center gap-8">
          <button
            className="text-xl text-[#2C276F] hover:underline focus:outline-none bg-transparent"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
          <button className="bg-[#2C276F] text-white font-bold text-xl px-8 py-3 rounded-xl">Get started</button>
        </div>
      </header>
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold text-[#23255A]">Welcome to Live150 Home!</h1>
      </main>
      {/* Login Popup Overlay */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-2xl font-bold z-10"
              onClick={() => setShowLogin(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <LoginForm />
          </div>
        </div>
      )}
    </div>
  );
}
