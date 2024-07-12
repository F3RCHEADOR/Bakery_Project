import { useStore } from "@nanostores/react";
import { isProductOpen, cartProducts } from "@/productStore";
import CartFlyoutToggle from "@/components/CartFlyoutToggle.jsx";

export function BlurWindow() {
  const $isProductOpen = useStore(isProductOpen);
  return $isProductOpen ? (
    <div className="w-full h-screen fixed z-30 top-0 right-0 blur-xl bg-black opacity-30"></div>
  ) : null;
}

export default function CartFlyout() {
  const $isProductOpen = useStore(isProductOpen);
  const $cartProducts = useStore(cartProducts);
  return $isProductOpen ? (
    <>
      <BlurWindow />
      <aside className="w-48 md:w-96  h-max border-l-4 absolute top-0 right-0 bg-red-100 z-40 py-4 px-2">
        <CartFlyoutToggle />
        {Object.values($cartProducts).length ? (
          <ul>
            {Object.values($cartProducts).map((cartProduct) => (
              <li className="space-y-1 border-4 rounded-xl bg-white h-40 " key={cartProduct.id}>
                <img className="w-32 md:w-40 " src={cartProduct.imageSrc} alt={cartProduct.name} />
                <h3 className="font-script text-xl">{cartProduct.name}</h3>
                <p className="text-sm">Cantidad: {cartProduct.quantity}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Carrito Vacio</p>
        )}
      </aside>
    </>
  ) : null;
}
