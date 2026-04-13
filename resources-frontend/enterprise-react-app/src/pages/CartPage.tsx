import { useCart } from "@/features/cart/context/CartContext";
import { useMemo } from "react";

export default function CartPage() {
  const { cart, dispatch } = useCart();

  const total = useMemo(() => {
    return cart.reduce((acc: number, item: any) => acc + item.price, 0);
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          className="w-40 mb-4 opacity-70"
        />
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="empty-state-text">Add some products to get started</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
      
      <div className="md:col-span-2 space-y-4">
        {cart.map((item: any, i: number) => (
          <div
            key={i}
            className="cart-item flex gap-4 rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.thumbnail}
              className="w-24 h-24 object-cover rounded-lg"
              alt={item.title}
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="font-bold text-lg">₹ {item.price}</span>
                <span className="summary-discount text-sm">
                  {item.discountPercentage}% off
                </span>
              </div>

              <p className="text-sm empty-state-text mt-1">
                ⭐ {item.rating} | 📦 {item.stock} left
              </p>

              <button
                onClick={() =>
                  dispatch({ type: "REMOVE", index: i })
                }
                className="remove-btn text-sm mt-2 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-card rounded-xl p-4 shadow-sm h-fit sticky top-6">
        <h2 className="text-lg font-bold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Items ({cart.length})</span>
          <span>₹ {total}</span>
        </div>

        <div className="summary-discount flex justify-between mb-2">
          <span>Discount</span>
          <span>- ₹ {Math.round(total * 0.1)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Delivery</span>
          <span>₹ 40</span>
        </div>

        <hr className="my-3" />

        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>₹ {total - Math.round(total * 0.1) + 40}</span>
        </div>

        <button
          onClick={() => alert("Order Placed ✅")}
          className="w-full mt-4 add-cart-btn"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
