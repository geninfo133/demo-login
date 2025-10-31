"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { apiPost } from "../utils/api";

export default function RegisterPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await apiPost("register", { username, password });

    if (res.ok) {
      alert("Registered successfully! Please login.");
      router.push("/login");
    } else {
      alert(res.data.error || "Registration failed");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">Register</h2>

        <form onSubmit={handleRegister} className="space-y-3">
          <InputField
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton text="Register" type="submit" />
        </form>

        <p className="text-center text-gray-600 mt-3 text-sm">
          Already have an account?{" "}
          <button
            onClick={() => router.push("/login")}
            className="text-blue-600 hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
