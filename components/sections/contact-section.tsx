"use client";

import Image from "next/image";
import { useEffect, useState, type FormEvent } from "react";

import { contacts } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

const EMAILJS_SERVICE_ID = "service_hg38rdc";
const EMAILJS_TEMPLATE_ID = "template_svr41if";
const EMAILJS_PUBLIC_KEY = "4-iXG_iZJViEatTMD";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success" && status !== "error") {
      return;
    }

    const timeout = window.setTimeout(() => {
      setStatus("idle");
      setErrorMessage("");
    }, 5000);

    return () => window.clearTimeout(timeout);
  }, [status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setErrorMessage("");

    const formData = new FormData(form);
    formData.append("service_id", EMAILJS_SERVICE_ID);
    formData.append("template_id", EMAILJS_TEMPLATE_ID);
    formData.append("user_id", EMAILJS_PUBLIC_KEY);

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "EmailJS request failed");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "EmailJS request failed");
      setStatus("error");
    }
  }

  return (
    <section id="kontak" className="bg-slate-950 px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading title="Hubungi Kami" align="left" />
          <div className="mt-8 space-y-5">
            {contacts.map((contact) => (
              <div key={contact.label}>
                <p className="text-xs font-black uppercase text-red-500">{contact.label}</p>
                <p className="mt-1 text-white/80">{contact.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 overflow-hidden rounded border border-blue-500/40 shadow-[0_0_24px_rgba(37,99,235,0.24)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.370822350722!2d112.23032666547552!3d-8.063605563909254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ed000541eae3%3A0x755b8f5b054d1a42!2sIKSPI%20Kera%20Sakti%20Sub%20Tanggung!5e0!3m2!1sid!2sid!4v1785980480701!5m2!1sid!2sid"
              className="block h-72 w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Peta lokasi latihan"
            />
          </div>
        </div>
        <form className="rounded border border-blue-500/50 bg-black/35 p-6" onSubmit={handleSubmit}>
          <p className="mb-5 text-lg font-black uppercase text-white">Kirim Pesan</p>
          <div className="space-y-4">
            <input
              className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-red-500"
              name="user_name"
              placeholder="Nama Lengkap"
              required
            />
            <input
              className="w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-red-500"
              name="user_email"
              placeholder="Email"
              required
              type="email"
            />
            <textarea
              className="min-h-36 w-full rounded border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-red-500"
              name="message"
              placeholder="Pesan"
              required
            />
            <button
              className="w-full rounded bg-red-600 px-5 py-4 text-sm font-black uppercase text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-950 disabled:text-white/55"
              disabled={status === "sending"}
              type="submit"
            >
              {status === "sending" ? "Mengirim..." : "Kirim Pesan"}
            </button>
            <div className="relative min-h-64 overflow-hidden rounded border border-red-500/40 bg-black shadow-[0_0_24px_rgba(220,38,38,0.24)]">
              <Image
                src="/kstanggung.PNG"
                alt="IKSPI Kera Sakti Sub Ranting Tanggung"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </form>
      </div>
      {status === "success" || status === "error" ? (
        <div className="fixed bottom-5 left-1/2 z-[90] w-[calc(100%-2rem)] max-w-md -translate-x-1/2">
          <div
            className={
              status === "success"
                ? "rounded border border-blue-500/50 bg-blue-950/90 px-5 py-4 text-sm font-bold text-blue-100 shadow-[0_0_28px_rgba(37,99,235,0.45)] backdrop-blur"
                : "rounded border border-red-500/50 bg-red-950/90 px-5 py-4 text-sm font-bold text-red-100 shadow-[0_0_28px_rgba(220,38,38,0.45)] backdrop-blur"
            }
          >
            {status === "success" ? "Pesan berhasil dikirim ke Gmail." : `Pesan gagal dikirim. ${errorMessage}`}
          </div>
        </div>
      ) : null}
    </section>
  );
}
