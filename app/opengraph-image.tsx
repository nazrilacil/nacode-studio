// app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Modern Web Development Studio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090d",
          color: "#F5F5F7",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top — Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#6c63ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            N
          </div>
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "0.1em",
            }}
          >
            NACODE
          </div>
        </div>

        {/* Center — Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Digital Experiences,
            <br />
            Built With{" "}
            <span style={{ color: "#a5a0ff", fontStyle: "italic" }}>Purpose.</span>
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9295a3",
              maxWidth: "800px",
              lineHeight: 1.4,
            }}
          >
            A creative web development studio crafting modern digital
            experiences for ambitious businesses.
          </div>
        </div>

        {/* Bottom — URL */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            color: "#9295a3",
          }}
        >
          <span>nacode.studio</span>
          <span>Independent Web Studio</span>
        </div>
      </div>
    ),
    { ...size },
  );
}