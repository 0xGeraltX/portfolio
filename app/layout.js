import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export const metadata = {
  title: "Geralt | Web3",
  description: "Web3 Developer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-slate-900 dark:text-white transition-colors">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
