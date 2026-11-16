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
        {/* Top — Logo Baru */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "14px",
              background: "#6c63ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              viewBox="0 0 100 100"
              width="44"
              height="44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27 85C17 85 10 68 20 52L40 22C47 10 63 10 73 24L88 47C95 60 90 85 75 85C65 85 57 77 51 66L39 81C35 84 31 85 27 85Z"
                fill="#ffffff"
              />
            </svg>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "36px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#F5F5F7",
            }}
          >
            NACODE
          </div>
        </div>

        {/* Center — Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "72px",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            <div style={{ display: "flex" }}>Digital Experiences,</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>Built With&nbsp;</span>
              <span style={{ color: "#a5a0ff", fontStyle: "italic" }}>
                Purpose.
              </span>
            </div>
          </div>
          <div
            style={{
              display: "flex",
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
