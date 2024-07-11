import { useStore } from "@nanostores/react";
import { isProductOpen, cartProducts } from "@/productStore";

export default function CartFlyout() {
  const $isProductOpen = useStore(isProductOpen);
  const $cartProducts = useStore(cartProducts);

  return $isProductOpen ? (
    <aside>
      {Object.values($cartProducts).length ? (<ul>
        {Object.values($cartProducts).map(cartProduct => (<li>
          <img src={cartProduct.imageSrc} alt={cartProduct.name} />
          <h3>{cartProduct.name}</h3>
          <p>Cantidad: {cartProduct.quantity}</p>
        </li>))}
      </ul>) : <p>Carrito Vacio</p>}
    </aside>
  ) : null
}