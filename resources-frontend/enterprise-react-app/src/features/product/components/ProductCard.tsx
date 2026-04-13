
const ProductCard = (({ product, onAdd }: any) => {
  return (
    <article className="product-card">
      <img src={product.thumbnail} className="product-image" alt={product.title} />

      <div className="product-body">
        <h2 className="product-title">{product.title}</h2>

        <p className="product-price">Rs. {product.price}</p>
        <p className="product-meta">Rating: {product.rating}</p>
        <p className="product-meta">Discount: {product.discountPercentage}% off</p>
        <p className="product-meta">Stock: {product.stock}</p>

        <button onClick={() => onAdd(product)} className="add-cart-btn">
          Add to Cart
        </button>
      </div>
    </article>
  );
});

export default ProductCard;
