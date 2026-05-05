import { useEffect, useState } from "react";

import { getStoreInfo } from "../api/client";

export default function HomePage() {
  const [storeInfo, setStoreInfo] = useState(null);

  useEffect(() => {
    getStoreInfo().then(setStoreInfo).catch(console.error);
  }, []);

  return (
    <section className="hero-card">
      <p className="badge">Fake Brand for Portfolio</p>
      <h2>{storeInfo?.name ?? "Loading store details..."}</h2>
      <p>{storeInfo?.hero_text ?? "Connecting to backend content service."}</p>
      <div className="hero-grid">
        <article>
          <h3>Tagline</h3>
          <p>{storeInfo?.tagline}</p>
        </article>
        <article>
          <h3>Location</h3>
          <p>{storeInfo?.location}</p>
        </article>
        <article>
          <h3>Email</h3>
          <p>{storeInfo?.contact_email}</p>
        </article>
      </div>
    </section>
  );
}
