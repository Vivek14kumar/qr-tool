"use client";
import { useEffect } from "react";

export default function Ads() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXXXXXX"
      data-ad-slot="XXXXXXXX"
      data-ad-format="auto"
      data-full-width-responsive="true" />
  );
}
