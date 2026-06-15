"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/ContactForm";

export default function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const size = searchParams.get("size") ?? undefined;
  return <ContactForm defaultSize={size} />;
}
