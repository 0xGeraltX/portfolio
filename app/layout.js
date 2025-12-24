import "../styles/globals.css";

export const metadata = {
  title: "Geralt | Web3",
  description: "Web3 Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
