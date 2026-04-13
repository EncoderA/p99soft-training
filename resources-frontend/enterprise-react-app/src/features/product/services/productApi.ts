export const fetchProducts = async (page: number, search: string) => {
  const url = search
    ? `https://dummyjson.com/products/search?q=${search}&limit=10&skip=${(page - 1) * 10}`
    : `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`;
    debugger;    
  const res = await fetch(url);
  const data = await res.json();

  return data.products;
};
''
