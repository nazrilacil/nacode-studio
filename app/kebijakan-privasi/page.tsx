// app/kebijakan-privasi/page.tsx
import type { Metadata } from "next";
import PageHeader from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi Nacode mengenai data yang dikumpulkan melalui website.",
  alternates: { canonical: "/kebijakan-privasi" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Kebijakan Privasi."
        breadcrumb={[{ label: "Kebijakan Privasi" }]}
      />
      <article className="py-16 sm:py-24">
        <div className="prose prose-invert mx-auto max-w-[760px] px-5 sm:px-8">
          <h2>Data yang dikumpulkan</h2>
          <p>
            Website Nacode tidak menyimpan data formulir ke database. Form
            inquiry mengarahkan Anda ke WhatsApp. Data yang Anda kirim melalui
            WhatsApp tunduk pada kebijakan privasi WhatsApp.
          </p>
          <h2>Analytics</h2>
          <p>
            Jika analytics diaktifkan, data agregat digunakan untuk memahami
            penggunaan website. Tidak ada data pribadi yang dijual.
          </p>
          <h2>Kontak</h2>
          <p>
            Pertanyaan mengenai privasi dapat dikirim ke alamat email yang
            tertera di halaman kontak.
          </p>
        </div>
      </article>
    </>
  );
}