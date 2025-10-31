"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-3">
          🎉 Free Demo End
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Thank you for attending our free demo session.  
          Continue your learning journey with us and unlock more advanced lessons!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => alert("Full course enrollment coming soon!")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition"
          >
            Enroll Now
          </button>

          <button
            onClick={() => router.push("/login")}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      </div>

      <footer className="mt-10 text-sm text-gray-500">
        © 2025 Gen Infotech — All rights reserved.
      </footer>
    </div>
  );
}
