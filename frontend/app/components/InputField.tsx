"use client";

interface InputFieldProps {
  label?: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  label,
  type,
  value,
  placeholder,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      {label && (
        <label className="block text-gray-600 mb-1 text-sm">{label}</label>
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-blue-400"
        required
      />
    </div>
  );
}
