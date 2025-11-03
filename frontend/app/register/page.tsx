"use client";

import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex flex-1 items-center justify-center">
        <RegisterForm />
      </main>
    </div>
  );
}
