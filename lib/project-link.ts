// lib/project-link.ts
import type { Project } from "@/data/projects";

export type ProjectLink = {
  url: string;
  /** Label pendek untuk badge: "Live" atau "Demo" */
  badgeLabel: string;
  /** Label panjang untuk tombol: "Visit Live Site" atau "View Demo" */
  buttonLabel: string;
  /** Judul kecil di kartu sidebar: "Live Website" atau "Live Demo" */
  heading: string;
  /** Subjudul di kartu sidebar */
  subheading: string;
  /** True = produksi/live (emerald), false = concept demo (accent) */
  isLive: boolean;
};

/**
 * Mengembalikan link publik project — prioritas liveUrl > demoUrl.
 * Null kalau project tidak punya link sama sekali.
 */
export function getProjectLink(project: Project): ProjectLink | null {
  if (project.liveUrl) {
    return {
      url: project.liveUrl,
      badgeLabel: "Live",
      buttonLabel: "Visit Live Site",
      heading: "Live Website",
      subheading: "Kunjungi website resmi",
      isLive: true,
    };
  }
  if (project.demoUrl) {
    return {
      url: project.demoUrl,
      badgeLabel: "Demo",
      buttonLabel: "View Demo",
      heading: "Live Demo",
      subheading: "Coba project ini langsung",
      isLive: false,
    };
  }
  return null;
}