import { addCartProduct, removeCartProduct, isProductOpen } from "@/productStore";
import { z } from "astro/zod";

export default function AddToCartProduct({ id, name, price, imageSrc, children }) {
  // we'll hardcore the item info for simplicity
  const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    imageSrc: z.string(),
  });

  const hardcodedItemInfo = productSchema.parse({
    id, name, price, imageSrc,
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

export function RemoveToCartProduct({ id, name, price, imageSrc, children }) {
  // we'll hardcore the item info for simplicity
  const productSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.string(),
    imageSrc: z.string(),
  });

  const hardcodedItemInfo = productSchema.parse({
    id, name, price, imageSrc,
  })

  function removeToCart(e) {
    e.preventDefault();
    isProductOpen.set(true);
    removeCartProduct(hardcodedItemInfo);
  }

  return (
    <form onSubmit={removeToCart}>
      {children}
    </form>
  )
}

