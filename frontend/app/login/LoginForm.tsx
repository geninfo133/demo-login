"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "../utils/api";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await apiPost("login", { username, password });
    setLoading(false);
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError(res.data.error || "Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <form
        className="bg-white rounded-2xl shadow-xl px-8 py-10 w-[420px] flex flex-col gap-6 border border-gray-100"
        onSubmit={handleLogin}
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-[#23255A]">
          Welcome to Live<span className="text-[#FF6A13]">150</span> Business
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-[#23255A] font-medium">Enter email ID or contact number</label>
          <input
            id="username"
            type="text"
            className="bg-[#eaf2ff] rounded-xl px-5 py-3 text-lg border-none focus:outline-none focus:ring-2 focus:ring-[#FF6A13]"
            placeholder="Enter email ID or contact number"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-[#23255A] font-medium">Enter password</label>
          <input
            id="password"
            type="password"
            className="bg-[#eaf2ff] rounded-xl px-5 py-3 text-lg border-none focus:outline-none focus:ring-2 focus:ring-[#FF6A13]"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        {error && (
          <div className="flex items-center gap-2 text-red-600 text-base font-medium mb-2 pl-1">
            <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#FF6A13" strokeWidth="2" fill="#fff" />
              <path stroke="#FF6A13" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
            </svg>
            <span>Incorrect email ID or password entered.</span>
          </div>
        )}
        <button
          type="submit"
          className="bg-[#FF6A13] text-white font-bold text-xl py-3 rounded-xl mt-2 disabled:opacity-60 w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="text-center mt-2">
          <button
            type="button"
            className="text-gray-400 text-base hover:underline"
            onClick={() => window.location.href = "/forgot-password"}
          >
            Forgot password?
          </button>
        </div>
        <div className="text-center mt-2 text-base">
          New here?{' '}
          <button
            type="button"
            className="text-[#FF6A13] font-semibold hover:underline"
            onClick={() => window.location.href = "/register"}
          >
            Register your organization
          </button>
        </div>
      </form>
    </div>
  );
}
