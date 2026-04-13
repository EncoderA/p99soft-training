import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Routes() {
  const [page, setPage] = useState("products");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main className="app-shell">
      <section className="shell-panel">
        <header className="shell-header">
          <nav className="shell-nav">
            <button
              onClick={() => setPage("products")}
              className={`button-base ${page === "products" ? "active" : ""}`}
            >
              Products
            </button>
            <button
              onClick={() => setPage("cart")}
              className={`button-base ${page === "cart" ? "active" : ""}`}
            >
              Cart
            </button>
          </nav>

          <button
            className="theme-toggle"
            onClick={() => setTheme((prev) => (prev === "light" ? "dark" : "light"))}
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {theme === "light" ? <Sun /> : <Moon />}
            </span>
          </button>
        </header>

        <div className="shell-content">
          {page === "products" ? <ProductPage /> : <CartPage />}
        </div>
      </section>
    </main>
  );
}
