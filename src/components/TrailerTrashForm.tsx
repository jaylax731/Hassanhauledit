"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";
interface F { name: string; phone: string; town: string; service: string; description: string; }
const empty: F = { name: "", phone: "", town: "", service: "", description: "" };

export default function TrailerTrashForm() {
  const [form, setForm] = useState<F>(empty);
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof F, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          address: form.town,
          loadSize: form.service || "Not specified",
          message: form.description,
          email: "",
          junkType: "Trailer Trash Landing Page",
          date: "",
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-white border-2 border-orange-500 rounded-2xl p-12 text-center shadow-xl">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-black text-stone-900 mb-3">Message Received!</h3>
        <p className="text-stone-500 text-sm leading-relaxed">
          We'll get back to you fast. For the fastest response, text a photo to{" "}
          <a href="tel:+15164766455" className="text-orange-500 font-bold">516-476-6455</a>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-stone-200 rounded-2xl p-8 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            placeholder="Your name"
            className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-orange-400 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">
            Phone <span className="text-orange-500">*</span>
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            required
            placeholder="Your phone number"
            className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-orange-400 transition-colors"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Town</label>
        <input
          type="text"
          value={form.town}
          onChange={(e) => update("town", e.target.value)}
          placeholder="Your town (e.g. Bay Shore, Ozone Park)"
          className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-orange-400 transition-colors"
        />
      </div>

      <div className="mb-5">
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Which option do you need?</label>
        <div className="grid grid-cols-3 gap-3">
          {["Curbside Pickup", "Trailer Drop-Off", "Not sure"].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => update("service", opt)}
              className={`py-3 px-2 rounded-lg text-xs font-bold border transition-all duration-200 text-center ${
                form.service === opt
                  ? "bg-orange-500 border-orange-500 text-white"
                  : "border-stone-200 text-stone-600 hover:border-orange-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">Describe the junk</label>
        <textarea
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          placeholder="What needs to go? How much? Any heavy items?"
          rows={3}
          className="w-full border border-stone-200 rounded-lg px-4 py-3 text-stone-900 text-sm focus:outline-none focus:border-orange-400 transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-500 text-sm mb-4 text-center">
          Something went wrong. Text us at{" "}
          <a href="tel:+15164766455" className="font-bold">516-476-6455</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-black uppercase tracking-wide py-4 rounded-xl transition-all duration-200 text-sm shadow-lg shadow-orange-500/25"
      >
        {status === "submitting" ? "Sending..." : "Send My Quote Request"}
      </button>

      <p className="text-center text-stone-400 text-xs mt-4">
        Or text a photo to{" "}
        <a href="tel:+15164766455" className="text-orange-500 font-bold">516-476-6455</a>{" "}
        for the fastest response.
      </p>
    </form>
  );
}
