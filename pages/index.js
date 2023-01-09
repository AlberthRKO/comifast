import Layout from "../components/shared/layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Sidebar from "../components/shared/sidebar";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // arreglando el problema del doble renderizado
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Layout title="Order" description="ComiFast for order section">
        <div className="w-full min-h-screen">
          <Sidebar />
          <div className="flex items-center justify-center w-full">
            {/* seccion para aplicar dark and light mode */}
            {currentTheme === "dark" ? (
              <button
                className="border rounded-lg px-4 py-1 shadow-xl"
                onClick={() => setTheme("light")}
              >
                Light
              </button>
            ) : (
              <button
                className="border rounded-lg px-4 py-1 shadow-xl"
                onClick={() => setTheme("dark")}
              >
                Dark
              </button>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
