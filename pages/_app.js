import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps, session }) {
  return (
    <div className="p-4 md:max-w-[1280px] mx-auto">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider session={session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
        <Toaster />
      </ThemeProvider>
    </div>
  );
}
