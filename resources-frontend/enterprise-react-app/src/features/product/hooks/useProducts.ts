import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productApi";

export const useProducts = (search: string) => {
  const [products, setProducts] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts([]);
    setPage(1);
  }, [search]);

  useEffect(() => {
    const load = async () => {
      if (loading) return;

      setLoading(true);

      const data = await fetchProducts(page, search);

      setProducts((prev) =>
        page === 1 ? data : [...prev, ...data]
      );

      setLoading(false);
    };

    load();
  }, [page, search]);

  return {
    products,
    setPage,
    loading,
  };
};
