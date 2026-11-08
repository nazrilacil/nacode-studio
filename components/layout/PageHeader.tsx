// components/layout/PageHeader.tsx
import Breadcrumb from "./Breadcrumb";
import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
};

export default function PageHeader({ eyebrow, title, description, breadcrumb }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-line pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(108,99,255,0.12),transparent_70%)]" />
      </div>
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        {breadcrumb && (
          <Reveal>
            <Breadcrumb items={breadcrumb} />
          </Reveal>
        )}
        <Reveal delay={0.05}>
          <div className="mt-5 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted">
            <span className="h-px w-8 bg-accent" />
            {eyebrow}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.02em]">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}