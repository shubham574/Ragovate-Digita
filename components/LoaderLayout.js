"use client";
import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "./loader.json"; 
import ClientWrapper from "./ClientWrapper";

export default function LoaderLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#fff",
        }}
      >
        <Lottie
          animationData={animationData}
          loop
          autoplay
          style={{ height: "200px", width: "200px" }}
        />
      </div>
    );
  }

  return <ClientWrapper>{children}</ClientWrapper>;
}
