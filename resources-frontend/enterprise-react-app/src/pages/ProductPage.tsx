import { useProducts } from "@/features/product/hooks/useProducts";
import ProductCard from "@/features/product/components/ProductCard";
import { useCart } from "@/features/cart/context/CartContext";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProductPage() {
  const { dispatch } = useCart();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
 
  const { products, setPage, loading } = useProducts(debouncedSearch);

  // infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        setPage((prev: number) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const addToCart = useCallback(
    (item: any) => {
      dispatch({ type: "ADD", payload: item });
      toast.success(`${item.title} added to cart`);
    },
    [dispatch]
  );

  return (
    <div>
      <input
        placeholder="Search products..."
        className="product-search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={addToCart}
          />
        ))}
      </div>

      {loading && (
        <p className="text-center mt-4 loading-text">Loading...</p>
      )}
    </div>
  );
}
