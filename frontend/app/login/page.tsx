"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import InputField from "../components/InputField";
import PrimaryButton from "../components/PrimaryButton";
import { apiPost } from "../utils/api";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await apiPost("login", { username, password });

    if (res.ok) {
      alert("Login successful!");
      router.push("/dashboard");
    } else {
      alert(res.data.error || "Invalid credentials");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center mb-4">Login</h2>

        <form onSubmit={handleLogin} className="space-y-3">
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
          <PrimaryButton text="Login" type="submit" />
        </form>

        <p className="text-center text-gray-600 mt-3 text-sm">
          New user?{" "}
          <button
            onClick={() => router.push("/register")}
            className="text-blue-600 hover:underline"
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
}
