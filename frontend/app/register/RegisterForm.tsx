"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { apiPost } from "../utils/api";

export default function RegisterForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await apiPost("register", { username, password });
    setLoading(false);
    if (res.ok) {
      router.push("/login");
    } else {
      setError(res.data.error || "Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <form
        className="bg-white rounded-2xl shadow-xl px-8 py-10 w-[420px] flex flex-col gap-6 border border-gray-100"
        onSubmit={handleRegister}
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
        {error && <div className="text-red-500 text-sm text-center mb-2">{error}</div>}
        <button
          type="submit"
          className="bg-[#FF6A13] text-white font-bold text-xl py-3 rounded-xl mt-2 disabled:opacity-60 w-full"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <div className="text-center mt-2 text-base">
          Already have an account?{' '}
          <button
            type="button"
            className="text-[#23255A] font-semibold hover:underline"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
