import { addCartProduct, isProductOpen } from "@/productStore";

export default function AddToCartProduct({ children }) {
  // we'll hardcore the item info for simplicity
  const hardcodedItemInfo = {
    id: 'astronaut-figurine',
    name: 'Astronaut Figurine',
    imageSrc: '#',
  }

  function addToCart(e) {
    e.preventDefault();
    isProductOpen.set(true);
    addCartProduct(hardcodedItemInfo);
  }

  return (
    <form onSubmit={addToCart}>
      {children}
    </form>
  )
}

