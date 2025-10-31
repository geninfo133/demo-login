"use client";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function PrimaryButton({
  text,
  onClick,
  type = "button",
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
}
