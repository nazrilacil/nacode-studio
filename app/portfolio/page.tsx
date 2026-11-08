import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Karya digital dari Nacode...",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}