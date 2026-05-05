import { useEffect, useMemo, useState } from "react";

import { getProducts } from "../api/client";

export default function ProductsPage({
  pageTitle = "Products",
  forcedCategory = null,
  hideCategoryBar = false,
}) {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(forcedCategory ?? "All");

  useEffect(() => {
    setActiveCategory(forcedCategory ?? "All");
  }, [forcedCategory]);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  const categories = useMemo(() => {
    const all = products.map((item) => item.category);
    return ["All", ...new Set(all)];
  }, [products]);

  const filtered = useMemo(() => {
    if (!forcedCategory && activeCategory === "All") {
      return products;
    }

    const categoryToUse = forcedCategory ?? activeCategory;
    return products.filter((product) => product.category === categoryToUse);
  }, [activeCategory, forcedCategory, products]);

  const titleText = forcedCategory ?? pageTitle;

  return (
    <section className="products-section">
      <header className="products-header">
        <h2>{titleText}</h2>
        <p>{filtered.length} items available</p>
      </header>
      {!hideCategoryBar && (
        <div className="category-bar">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={category === activeCategory ? "chip chip-active" : "chip"}
          >
            {category}
          </button>
        ))}
        </div>
      )}
      <div className="product-grid">
        {filtered.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-media">
              <img
                src={product.image_url}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="product-content">
              <p className="product-category">{product.category}</p>
              <h3>{product.name}</h3>
              <p>{product.short_description}</p>
              <p className="product-details">{product.details}</p>
              <p className="price">${product.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="status-text">No products available in this category.</p>}
    </section>
  );
}
