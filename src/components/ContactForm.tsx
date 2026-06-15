"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const loadSizes = ["Mini Haul (1/4 Load)", "Half Haul (1/2 Load)", "Full Haul (Full Load)", "Not Sure Yet"];

const junkTypes = [
  "Furniture",
  "Appliances",
  "Garage Junk",
  "Basement Cleanout",
  "Yard Debris",
  "Construction Debris",
  "Estate Cleanout",
  "Apartment / Move-Out",
  "Office Equipment",
  "Mixed / Multiple",
  "Other",
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  date: string;
  junkType: string;
  loadSize: string;
  message: string;
}

const empty: FormData = {
  name: "",
  phone: "",
  email: "",
  address: "",
  date: "",
  junkType: "",
  loadSize: "",
  message: "",
};

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[\d\s\-()+.]{7,20}$/.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email address.";
  if (!data.address.trim()) errors.address = "Address or town is required.";
  if (!data.loadSize) errors.loadSize = "Please select an estimated load size.";
  return errors;
}

export default function ContactForm({ defaultSize }: { defaultSize?: string }) {
  const [form, setForm] = useState<FormData>({
    ...empty,
    loadSize: loadSizes.find((s) => s.toLowerCase().startsWith(defaultSize?.toLowerCase() ?? "__")) ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [photoName, setPhotoName] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function set(field: keyof FormData, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, photoName }),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "error") {
    return (
      <div className="bg-stone-900 border border-red-500/30 rounded-sm p-12 text-center">
        <div className="text-5xl mb-4">⚠️</div>
        <h3 className="text-2xl font-bold text-stone-50 mb-3">Something Went Wrong</h3>
        <p className="text-stone-400 leading-relaxed max-w-md mx-auto mb-8">
          Your message couldn&apos;t be sent. Please call or text us directly and we&apos;ll get you sorted right away.
        </p>
        <div className="inline-flex flex-col gap-2 text-sm text-stone-500">
          <a href="tel:+15164766455" className="text-orange-500 hover:text-orange-400">📞 516-476-6455</a>
          <a href="mailto:hassansoldit@gmail.com" className="text-orange-500 hover:text-orange-400">✉️ hassansoldit@gmail.com</a>
        </div>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-stone-500 hover:text-stone-300 text-sm underline transition-colors duration-200 block mx-auto"
        >
          Try again
        </button>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="bg-stone-900 border border-stone-800 rounded-sm p-12 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-stone-50 mb-3">Message Received!</h3>
        <p className="text-stone-400 leading-relaxed max-w-md mx-auto mb-8">
          Thanks, {form.name.split(" ")[0]}! We got your request and will be in touch shortly —
          usually within the hour during business hours.
        </p>
        <div className="inline-flex flex-col gap-2 text-sm text-stone-500">
          <span>📞 Need to reach us faster? Call <a href="tel:+15164766455" className="text-orange-500 hover:text-orange-400">516-476-6455</a></span>
          <span>✉️ Or email <a href="mailto:hassansoldit@gmail.com" className="text-orange-500 hover:text-orange-400">hassansoldit@gmail.com</a></span>
        </div>
        <button
          onClick={() => { setForm(empty); setStatus("idle"); setPhotoName(null); }}
          className="mt-8 text-stone-500 hover:text-stone-300 text-sm underline transition-colors duration-200"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full bg-stone-950 border rounded-sm px-4 py-3 text-stone-50 text-sm placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-all duration-200";
  const inputNormal = `${inputBase} border-stone-800 focus:border-orange-500/50`;
  const inputError = `${inputBase} border-red-500/60 focus:border-red-500`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-stone-300 mb-1.5">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            className={errors.name ? inputError : inputNormal}
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-stone-300 mb-1.5">
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 555-5555"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            className={errors.phone ? inputError : inputNormal}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-stone-300 mb-1.5">
          Email Address <span className="text-orange-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="jane@example.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          className={errors.email ? inputError : inputNormal}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-stone-300 mb-1.5">
          Address / Town <span className="text-orange-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          autoComplete="street-address"
          placeholder="123 Main St, Springfield or just your town"
          value={form.address}
          onChange={(e) => set("address", e.target.value)}
          className={errors.address ? inputError : inputNormal}
        />
        {errors.address && <p className="mt-1.5 text-xs text-red-400">{errors.address}</p>}
      </div>

      {/* Preferred Date + Junk Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-stone-300 mb-1.5">
            Preferred Pickup Date
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            className={`${inputNormal} [color-scheme:dark]`}
          />
        </div>

        <div>
          <label htmlFor="junkType" className="block text-sm font-semibold text-stone-300 mb-1.5">
            Type of Junk
          </label>
          <select
            id="junkType"
            value={form.junkType}
            onChange={(e) => set("junkType", e.target.value)}
            className={`${inputNormal} cursor-pointer`}
          >
            <option value="" disabled>Select junk type…</option>
            {junkTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Load Size */}
      <div>
        <label className="block text-sm font-semibold text-stone-300 mb-3">
          Estimated Load Size <span className="text-orange-500">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          {loadSizes.map((size) => (
            <label
              key={size}
              className={`flex items-center gap-3 cursor-pointer border rounded-sm px-4 py-3 transition-all duration-200 ${
                form.loadSize === size
                  ? "border-orange-500 bg-orange-500/10 text-stone-50"
                  : "border-stone-800 bg-stone-950 text-stone-400 hover:border-stone-600 hover:text-stone-200"
              }`}
            >
              <input
                type="radio"
                name="loadSize"
                value={size}
                checked={form.loadSize === size}
                onChange={() => set("loadSize", size)}
                className="sr-only"
              />
              <span
                className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
                  form.loadSize === size ? "border-orange-500" : "border-stone-600"
                }`}
              >
                {form.loadSize === size && (
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                )}
              </span>
              <span className="text-sm font-medium">{size}</span>
            </label>
          ))}
        </div>
        {errors.loadSize && <p className="mt-2 text-xs text-red-400">{errors.loadSize}</p>}
      </div>

      {/* Photo Upload Placeholder */}
      <div>
        <label className="block text-sm font-semibold text-stone-300 mb-1.5">
          Photo of Your Junk{" "}
          <span className="text-stone-500 font-normal">(optional — helps us quote faster)</span>
        </label>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-stone-700 hover:border-orange-500/50 bg-stone-950 hover:bg-stone-900 rounded-sm px-6 py-8 text-center transition-all duration-200 group"
        >
          <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">📷</div>
          {photoName ? (
            <p className="text-stone-300 text-sm font-medium">{photoName}</p>
          ) : (
            <>
              <p className="text-stone-400 text-sm mb-1">Click to attach a photo</p>
              <p className="text-stone-600 text-xs">JPG, PNG up to 10MB — helps us give you the best quote</p>
            </>
          )}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => setPhotoName(e.target.files?.[0]?.name ?? null)}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-stone-300 mb-1.5">
          Job Details / Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe what you need hauled, any access notes (stairs, tight spaces), or anything else we should know..."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          className={`${inputNormal} resize-none`}
        />
      </div>

      {/* Submit */}
      <div>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-stone-700 disabled:cursor-not-allowed text-white font-bold uppercase tracking-wide text-sm py-4 rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-3"
        >
          {status === "submitting" ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending your request...
            </>
          ) : (
            "Send My Quote Request"
          )}
        </button>
        <p className="mt-3 text-center text-xs text-stone-600">
          We typically respond within 1 hour during business hours. No spam, ever.
        </p>
      </div>
    </form>
  );
}
