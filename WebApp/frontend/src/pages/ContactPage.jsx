import { useState } from "react";

import { sendContactMessage } from "../api/client";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Sending...");

    try {
      const response = await sendContactMessage(form);
      setStatus(response.message);
      setForm(initialForm);
    } catch {
      setStatus("Request failed. Try again in a few seconds.");
    }
  }

  return (
    <section className="contact-card">
      <h2>Contact Us</h2>
      <p>This sends to a fake inbox endpoint in the Node.js API.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            minLength={10}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      <p className="status-text">{status}</p>
    </section>
  );
}
