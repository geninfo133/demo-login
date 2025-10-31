import "./globals.css";

export const metadata = {
  title: "Full Stack App",
  description: "Full Stack with Python + Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
