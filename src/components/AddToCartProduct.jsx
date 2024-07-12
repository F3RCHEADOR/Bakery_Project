import { addCartProduct, isProductOpen } from "@/productStore";
import { z } from "astro/zod";

export default function AddToCartProduct({ id, name, imageSrc, children }) {
  // we'll hardcore the item info for simplicity
  const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    imageSrc: z.string(),
  });

  const hardcodedItemInfo = productSchema.parse({
    id, name, imageSrc,
  })

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

